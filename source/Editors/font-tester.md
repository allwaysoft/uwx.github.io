---
title: Heavy-Duty Password Generator
---

<style type="text/css">

</style>

<style type="text/css">
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.boolean,
.token.number {
  color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function {
  color: #e6db74;
}

.token.keyword {
  color: #66d9ef;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

</style>

<style type="text/css">
  .blok {
    white-space: pre !important;
    border: none !important;
  }
</style>

<script type="text/javascript">
  window.onload = function() {

  };
</script>

{% raw %}
<div style="background: #272822;border: 1px black;padding: 5px;">
<code class="blok language-c"><span class="token comment" spellcheck="true">/*
 * Supplementary group IDs
 */</span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/cred.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/export.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/slab.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/security.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/syscalls.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;linux/user_namespace.h&gt;</span></span>
<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;asm/uaccess.h&gt;</span></span>

<span class="token keyword">struct</span> group_info <span class="token operator">*</span><span class="token function">groups_alloc</span><span class="token punctuation">(</span><span class="token keyword">int</span> gidsetsize<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">;</span>
        <span class="token keyword">int</span> nblocks<span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>

        nblocks <span class="token operator">=</span> <span class="token punctuation">(</span>gidsetsize <span class="token operator">+</span> NGROUPS_PER_BLOCK <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> NGROUPS_PER_BLOCK<span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">/* Make sure we always allocate at least one indirect block pointer */</span>
        nblocks <span class="token operator">=</span> nblocks <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        group_info <span class="token operator">=</span> <span class="token function">kmalloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token operator">*</span>group_info<span class="token punctuation">)</span> <span class="token operator">+</span> nblocks<span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>gid_t <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> GFP_USER<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>group_info<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        group_info<span class="token operator">-&gt;</span>ngroups <span class="token operator">=</span> gidsetsize<span class="token punctuation">;</span>
        group_info<span class="token operator">-&gt;</span>nblocks <span class="token operator">=</span> nblocks<span class="token punctuation">;</span>
        <span class="token function">atomic_set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group_info<span class="token operator">-&gt;</span>usage<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>gidsetsize <span class="token operator">&lt;=</span> NGROUPS_SMALL<span class="token punctuation">)</span>
                group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>small_block<span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nblocks<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        kgid_t <span class="token operator">*</span>b<span class="token punctuation">;</span>
                        b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">__get_free_page</span><span class="token punctuation">(</span>GFP_USER<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">)</span>
                                <span class="token keyword">goto</span> out_undo_partial_alloc<span class="token punctuation">;</span>
                        group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> group_info<span class="token punctuation">;</span>

out_undo_partial_alloc<span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">free_page</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span>group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">kfree</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>groups_alloc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">groups_free</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> group_info<span class="token operator">-&gt;</span>small_block<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i<span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> group_info<span class="token operator">-&gt;</span>nblocks<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                        <span class="token function">free_page</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span>group_info<span class="token operator">-&gt;</span>blocks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">kfree</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>groups_free<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">/* export the group_info to a user-space array */</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">groups_to_user</span><span class="token punctuation">(</span>gid_t __user <span class="token operator">*</span>grouplist<span class="token punctuation">,</span>
                          <span class="token keyword">const</span> <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> user_namespace <span class="token operator">*</span>user_ns <span class="token operator">=</span> <span class="token function">current_user_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> count <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                gid_t gid<span class="token punctuation">;</span>
                gid <span class="token operator">=</span> <span class="token function">from_kgid_munged</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">,</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">put_user</span><span class="token punctuation">(</span>gid<span class="token punctuation">,</span> grouplist<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span> <span class="token operator">-</span>EFAULT<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/* fill a group_info from a user-space array - it must be allocated already */</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">groups_from_user</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">,</span>
    gid_t __user <span class="token operator">*</span>grouplist<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> user_namespace <span class="token operator">*</span>user_ns <span class="token operator">=</span> <span class="token function">current_user_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> count <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                gid_t gid<span class="token punctuation">;</span>
                kgid_t kgid<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">get_user</span><span class="token punctuation">(</span>gid<span class="token punctuation">,</span> grouplist<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span> <span class="token operator">-</span>EFAULT<span class="token punctuation">;</span>

                kgid <span class="token operator">=</span> <span class="token function">make_kgid</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">,</span> gid<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">gid_valid</span><span class="token punctuation">(</span>kgid<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

                <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span> kgid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/* a simple Shell sort */</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">groups_sort</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">int</span> base<span class="token punctuation">,</span> max<span class="token punctuation">,</span> stride<span class="token punctuation">;</span>
        <span class="token keyword">int</span> gidsetsize <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>stride <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> stride <span class="token operator">&lt;</span> gidsetsize<span class="token punctuation">;</span> stride <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> stride <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/* nothing */</span>
        stride <span class="token operator">/</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>stride<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> gidsetsize <span class="token operator">-</span> stride<span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span>base <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> base <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> base<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">int</span> left <span class="token operator">=</span> base<span class="token punctuation">;</span>
                        <span class="token keyword">int</span> right <span class="token operator">=</span> left <span class="token operator">+</span> stride<span class="token punctuation">;</span>
                        kgid_t tmp <span class="token operator">=</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">gid_gt</span><span class="token punctuation">(</span><span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">,</span> tmp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span>
                                    <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                right <span class="token operator">=</span> left<span class="token punctuation">;</span>
                                left <span class="token operator">-</span><span class="token operator">=</span> stride<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                stride <span class="token operator">/</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/* a simple bsearch */</span>
<span class="token keyword">int</span> <span class="token function">groups_search</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">,</span> kgid_t grp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">unsigned</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>group_info<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

        left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        right <span class="token operator">=</span> group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">unsigned</span> <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token operator">+</span>right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">gid_gt</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">gid_lt</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> <span class="token function">GROUP_AT</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/**
 * set_groups - Change a group subscription in a set of credentials
 * @new: The newly prepared set of credentials to alter
 * @group_info: The group list to install
 */</span>
<span class="token keyword">void</span> <span class="token function">set_groups</span><span class="token punctuation">(</span><span class="token keyword">struct</span> cred <span class="token operator">*</span>new<span class="token punctuation">,</span> <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token function">put_group_info</span><span class="token punctuation">(</span>new<span class="token operator">-&gt;</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">groups_sort</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">get_group_info</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        new<span class="token operator">-&gt;</span>group_info <span class="token operator">=</span> group_info<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>set_groups<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">/**
 * set_current_groups - Change current's group subscription
 * @group_info: The group list to impose
 *
 * Validate a group subscription and, if valid, impose it upon current's task
 * security record.
 */</span>
<span class="token keyword">int</span> <span class="token function">set_current_groups</span><span class="token punctuation">(</span><span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> cred <span class="token operator">*</span>new<span class="token punctuation">;</span>

        new <span class="token operator">=</span> <span class="token function">prepare_creds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>new<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>ENOMEM<span class="token punctuation">;</span>

        <span class="token function">set_groups</span><span class="token punctuation">(</span>new<span class="token punctuation">,</span> group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">commit_creds</span><span class="token punctuation">(</span>new<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>set_current_groups<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">SYSCALL_DEFINE2</span><span class="token punctuation">(</span>getgroups<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> gidsetsize<span class="token punctuation">,</span> gid_t __user <span class="token operator">*</span><span class="token punctuation">,</span> grouplist<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token keyword">struct</span> cred <span class="token operator">*</span>cred <span class="token operator">=</span> <span class="token function">current_cred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>gidsetsize <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

        <span class="token comment" spellcheck="true">/* no need to grab task_lock here; it cannot change */</span>
        i <span class="token operator">=</span> cred<span class="token operator">-&gt;</span>group_info<span class="token operator">-&gt;</span>ngroups<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>gidsetsize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> gidsetsize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        i <span class="token operator">=</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
                        <span class="token keyword">goto</span> out<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">groups_to_user</span><span class="token punctuation">(</span>grouplist<span class="token punctuation">,</span> cred<span class="token operator">-&gt;</span>group_info<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        i <span class="token operator">=</span> <span class="token operator">-</span>EFAULT<span class="token punctuation">;</span>
                        <span class="token keyword">goto</span> out<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
out<span class="token punctuation">:</span>
        <span class="token keyword">return</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">may_setgroups</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> user_namespace <span class="token operator">*</span>user_ns <span class="token operator">=</span> <span class="token function">current_user_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">ns_capable</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">,</span> CAP_SETGID<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token function">userns_may_setgroups</span><span class="token punctuation">(</span>user_ns<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/*
 *      SMP: Our groups are copy-on-write. We can set them safely
 *      without another task interfering.
 */</span>

<span class="token function">SYSCALL_DEFINE2</span><span class="token punctuation">(</span>setgroups<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> gidsetsize<span class="token punctuation">,</span> gid_t __user <span class="token operator">*</span><span class="token punctuation">,</span> grouplist<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">struct</span> group_info <span class="token operator">*</span>group_info<span class="token punctuation">;</span>
        <span class="token keyword">int</span> retval<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">may_setgroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>EPERM<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span><span class="token punctuation">)</span>gidsetsize <span class="token operator">&gt;</span> NGROUPS_MAX<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

        group_info <span class="token operator">=</span> <span class="token function">groups_alloc</span><span class="token punctuation">(</span>gidsetsize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>group_info<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">-</span>ENOMEM<span class="token punctuation">;</span>
        retval <span class="token operator">=</span> <span class="token function">groups_from_user</span><span class="token punctuation">(</span>group_info<span class="token punctuation">,</span> grouplist<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>retval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">put_group_info</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        retval <span class="token operator">=</span> <span class="token function">set_current_groups</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">put_group_info</span><span class="token punctuation">(</span>group_info<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">/*
 * Check whether we're fsgid/egid or in the supplemental group..
 */</span>
<span class="token keyword">int</span> <span class="token function">in_group_p</span><span class="token punctuation">(</span>kgid_t grp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token keyword">struct</span> cred <span class="token operator">*</span>cred <span class="token operator">=</span> <span class="token function">current_cred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> retval <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">gid_eq</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> cred<span class="token operator">-&gt;</span>fsgid<span class="token punctuation">)</span><span class="token punctuation">)</span>
                retval <span class="token operator">=</span> <span class="token function">groups_search</span><span class="token punctuation">(</span>cred<span class="token operator">-&gt;</span>group_info<span class="token punctuation">,</span> grp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>in_group_p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">in_egroup_p</span><span class="token punctuation">(</span>kgid_t grp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token keyword">struct</span> cred <span class="token operator">*</span>cred <span class="token operator">=</span> <span class="token function">current_cred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> retval <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">gid_eq</span><span class="token punctuation">(</span>grp<span class="token punctuation">,</span> cred<span class="token operator">-&gt;</span>egid<span class="token punctuation">)</span><span class="token punctuation">)</span>
                retval <span class="token operator">=</span> <span class="token function">groups_search</span><span class="token punctuation">(</span>cred<span class="token operator">-&gt;</span>group_info<span class="token punctuation">,</span> grp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> retval<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">EXPORT_SYMBOL</span><span class="token punctuation">(</span>in_egroup_p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>
</div>
{% endraw %}
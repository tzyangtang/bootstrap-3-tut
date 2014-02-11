




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>angular.js/src/ngLocale/angular-locale_zh.js at master · angular/angular.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/angular.js" name="twitter:title" /><meta content="Contribute to angular.js development by creating an account on GitHub." name="twitter:description" /><meta content="https://2.gravatar.com/avatar/f0d91e5cf8ad1ce7972cc486baa20c42?d=https%3A%2F%2Fidenticons.github.com%2Ff3377e1ac5fdd9183c13129960faedd7.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/f0d91e5cf8ad1ce7972cc486baa20c42?d=https%3A%2F%2Fidenticons.github.com%2Ff3377e1ac5fdd9183c13129960faedd7.png&amp;r=x&amp;s=400" property="og:image" /><meta content="angular/angular.js" property="og:title" /><meta content="https://github.com/angular/angular.js" property="og:url" /><meta content="Contribute to angular.js development by creating an account on GitHub." property="og:description" />

    <meta name="hostname" content="github-fe137-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8CA3FE95:2470:D45049:52FA9C8E" name="octolytics-dimension-request_id" /><meta content="4822236" name="octolytics-actor-id" /><meta content="tzyangtang" name="octolytics-actor-login" /><meta content="800ad35ffe5064e74e2f0a24ed66e81ff0092f171d3aaeebe6af3a83a27bada9" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="vX5Ws0INIbjb6IR+JuxLEZGezDmrJaFG330IArevBQ8=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-b4e78dc2dc149ae2469047813d94618174176740.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-4fd4fe05d8527629971c4db4b4cc678d963ce328.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-141ccdd45eb970761fa7cacc2cb60ed9726dd738.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-432022352fb2cecd9e1db467da00034408a2fc8e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="60c1f6e54e86df95f8519fb41bb61a44">

        <link data-pjax-transient rel='permalink' href='/angular/angular.js/blob/08793a690abe3eda40deae10f8a0a117779bdbd9/src/ngLocale/angular-locale_zh.js'>

  <meta name="description" content="Contribute to angular.js development by creating an account on GitHub." />

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="460078" name="octolytics-dimension-repository_id" /><meta content="angular/angular.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="460078" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/angular.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular/angular.js/commits/master.atom" rel="alternate" title="Recent Commits to angular.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="tzyangtang"
      data-repo="angular/angular.js"
      data-branch="master"
      data-sha="615f5b6d94f44b056ea113a1e5d906d2af88153f"
  >

    <input type="hidden" name="nwo" value="angular/angular.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/tzyangtang" class="name">
        <img alt="tzyangtang" class=" js-avatar" data-user="4822236" height="20" src="https://0.gravatar.com/avatar/a9589cb3860d5508cb5ace7b73ea191f?d=https%3A%2F%2Fidenticons.github.com%2Fe6591691852dce798c77e1ae7492a8e4.png&amp;r=x&amp;s=140" width="20" /> tzyangtang
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" title="Create new..." aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings "
        title="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="angular/angular.js">This repository</span>
    </li>
      <li>
        <a href="/angular/angular.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="vX5Ws0INIbjb6IR+JuxLEZGezDmrJaFG330IArevBQ8=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="460078" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/angular/angular.js/watchers">
        2,062
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/angular/angular.js/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/angular/angular.js/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/angular/angular.js/stargazers">
        20,219
      </a>
  </div>

  </li>


        <li>
          <a href="/angular/angular.js/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/angular/angular.js/network" class="social-count">6,038</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/angular" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/angular/angular.js" class="js-current-repository js-repo-home-link">angular.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/angular/angular.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /angular/angular.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/angular/angular.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /angular/angular.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>997</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/angular/angular.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /angular/angular.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>327</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/angular/angular.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /angular/angular.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/angular/angular.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /angular/angular.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/angular/angular.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular/angular.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/angular/angular.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /angular/angular.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/angular/angular.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/angular.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:angular/angular.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:angular/angular.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/angular/angular.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/angular.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/angular/angular.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:8cd35ba9d75824fd59538524a5eaa897 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/angular/angular.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/g3_v1_0/src/ngLocale/angular-locale_zh.js"
                 data-name="g3_v1_0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="g3_v1_0">g3_v1_0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/g3_v1_2/src/ngLocale/angular-locale_zh.js"
                 data-name="g3_v1_2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="g3_v1_2">g3_v1_2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/master/src/ngLocale/angular-locale_zh.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/sauce-addon/src/ngLocale/angular-locale_zh.js"
                 data-name="sauce-addon"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="sauce-addon">sauce-addon</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/v0.9.x/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.x">v0.9.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/v1.0.x/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.x">v1.0.x</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.12/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12">v1.2.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.11/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11">v1.2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.10/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10">v1.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.9/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9">v1.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.8/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8">v1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.7/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7">v1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.6/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.5/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.4/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.3/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.2/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.1/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0-rc.3/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.3">v1.2.0-rc.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0-rc.2/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.2">v1.2.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0rc1/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0rc1">v1.2.0rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.5/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.4/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.3/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.2/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.1/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.0/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.8/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.8">v1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.7/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.7">v1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.6/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.6">v1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.5/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.4/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.3/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.2/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.1/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc12/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc12">v1.0.0rc12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc11/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc11">v1.0.0rc11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc10/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc10">v1.0.0rc10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc9/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc9">v1.0.0rc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc8/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc8">v1.0.0rc8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc7/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc7">v1.0.0rc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc6/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc6">v1.0.0rc6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc5/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc5">v1.0.0rc5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc4/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc4">v1.0.0rc4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc3/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc3">v1.0.0rc3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc2/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc2">v1.0.0rc2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc1/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0rc1">v1.0.0rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0/src/ngLocale/angular-locale_zh.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.6/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.6">v0.10.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.5/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.5">v0.10.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.4/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.4">v0.10.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.3/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.3">v0.10.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.2/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.2">v0.10.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.1/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.1">v0.10.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.0/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.10.0">v0.10.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.19/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.19">v0.9.19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.18/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.18">v0.9.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.17/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.17">v0.9.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.16/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.16">v0.9.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.15/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.15">v0.9.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.14/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.14">v0.9.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.13/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.13">v0.9.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.12/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.12">v0.9.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.11/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.11">v0.9.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.10/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.10">v0.9.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.9/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.9">v0.9.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.7/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.7">v0.9.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.6/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.6">v0.9.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.5/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.5">v0.9.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.4/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.4">v0.9.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.3/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.3">v0.9.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.2/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.2">v0.9.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.1/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.1">v0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.0/src/ngLocale/angular-locale_zh.js"
                 data-name="v0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.9.0">v0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/g3-v1.0.0-rc2/src/ngLocale/angular-locale_zh.js"
                 data-name="g3-v1.0.0-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="g3-v1.0.0-rc2">g3-v1.0.0-rc2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/g3-v1.0.0rc1/src/ngLocale/angular-locale_zh.js"
                 data-name="g3-v1.0.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="g3-v1.0.0rc1">g3-v1.0.0rc1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js/tree/master/src/ngLocale" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">ngLocale</span></a></span><span class="separator"> / </span><strong class="final-path">angular-locale_zh.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/ngLocale/angular-locale_zh.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/angular/angular.js/contributors/master/src/ngLocale/angular-locale_zh.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>99 lines (99 sloc)</span>
        <span>2.11 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards js-update-url-with-hash"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/angular/angular.js/edit/master/src/ngLocale/angular-locale_zh.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/angular/angular.js/raw/master/src/ngLocale/angular-locale_zh.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/angular/angular.js/blame/master/src/ngLocale/angular-locale_zh.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/angular/angular.js/commits/master/src/ngLocale/angular-locale_zh.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/angular/angular.js/delete/master/src/ngLocale/angular-locale_zh.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC2'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;ngLocale&quot;</span><span class="p">,</span> <span class="p">[],</span> <span class="p">[</span><span class="s2">&quot;$provide&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$provide</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3'><span class="kd">var</span> <span class="nx">PLURAL_CATEGORY</span> <span class="o">=</span> <span class="p">{</span><span class="nx">ZERO</span><span class="o">:</span> <span class="s2">&quot;zero&quot;</span><span class="p">,</span> <span class="nx">ONE</span><span class="o">:</span> <span class="s2">&quot;one&quot;</span><span class="p">,</span> <span class="nx">TWO</span><span class="o">:</span> <span class="s2">&quot;two&quot;</span><span class="p">,</span> <span class="nx">FEW</span><span class="o">:</span> <span class="s2">&quot;few&quot;</span><span class="p">,</span> <span class="nx">MANY</span><span class="o">:</span> <span class="s2">&quot;many&quot;</span><span class="p">,</span> <span class="nx">OTHER</span><span class="o">:</span> <span class="s2">&quot;other&quot;</span><span class="p">};</span></div><div class='line' id='LC4'><span class="nx">$provide</span><span class="p">.</span><span class="nx">value</span><span class="p">(</span><span class="s2">&quot;$locale&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;<span class="s2">&quot;DATETIME_FORMATS&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;AMPMS&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u4e0a\u5348&quot;</span><span class="p">,</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u4e0b\u5348&quot;</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;DAY&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u65e5&quot;</span><span class="p">,</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u4e00&quot;</span><span class="p">,</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u4e8c&quot;</span><span class="p">,</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u4e09&quot;</span><span class="p">,</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u56db&quot;</span><span class="p">,</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u4e94&quot;</span><span class="p">,</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u661f\u671f\u516d&quot;</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;MONTH&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;1\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;2\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;3\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;4\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;5\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;6\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;7\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;8\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;9\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;10\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;11\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;12\u6708&quot;</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;SHORTDAY&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u65e5&quot;</span><span class="p">,</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u4e00&quot;</span><span class="p">,</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u4e8c&quot;</span><span class="p">,</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u4e09&quot;</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u56db&quot;</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u4e94&quot;</span><span class="p">,</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;\u5468\u516d&quot;</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;SHORTMONTH&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;1\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;2\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;3\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;4\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;5\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;6\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;7\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;8\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;9\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;10\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;11\u6708&quot;</span><span class="p">,</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;12\u6708&quot;</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;fullDate&quot;</span><span class="o">:</span> <span class="s2">&quot;y\u5e74M\u6708d\u65e5EEEE&quot;</span><span class="p">,</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;longDate&quot;</span><span class="o">:</span> <span class="s2">&quot;y\u5e74M\u6708d\u65e5&quot;</span><span class="p">,</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;medium&quot;</span><span class="o">:</span> <span class="s2">&quot;yyyy-M-d ah:mm:ss&quot;</span><span class="p">,</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;mediumDate&quot;</span><span class="o">:</span> <span class="s2">&quot;yyyy-M-d&quot;</span><span class="p">,</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;mediumTime&quot;</span><span class="o">:</span> <span class="s2">&quot;ah:mm:ss&quot;</span><span class="p">,</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;short&quot;</span><span class="o">:</span> <span class="s2">&quot;yy-M-d ah:mm&quot;</span><span class="p">,</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;shortDate&quot;</span><span class="o">:</span> <span class="s2">&quot;yy-M-d&quot;</span><span class="p">,</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;shortTime&quot;</span><span class="o">:</span> <span class="s2">&quot;ah:mm&quot;</span></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="s2">&quot;NUMBER_FORMATS&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;CURRENCY_SYM&quot;</span><span class="o">:</span> <span class="s2">&quot;\u00a5&quot;</span><span class="p">,</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;DECIMAL_SEP&quot;</span><span class="o">:</span> <span class="s2">&quot;.&quot;</span><span class="p">,</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;GROUP_SEP&quot;</span><span class="o">:</span> <span class="s2">&quot;,&quot;</span><span class="p">,</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;PATTERNS&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;gSize&quot;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;lgSize&quot;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;macFrac&quot;</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;maxFrac&quot;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;minFrac&quot;</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;minInt&quot;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;negPre&quot;</span><span class="o">:</span> <span class="s2">&quot;-&quot;</span><span class="p">,</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;negSuf&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;posPre&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;posSuf&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;gSize&quot;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;lgSize&quot;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;macFrac&quot;</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;maxFrac&quot;</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;minFrac&quot;</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;minInt&quot;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;negPre&quot;</span><span class="o">:</span> <span class="s2">&quot;(\u00a4&quot;</span><span class="p">,</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;negSuf&quot;</span><span class="o">:</span> <span class="s2">&quot;)&quot;</span><span class="p">,</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;posPre&quot;</span><span class="o">:</span> <span class="s2">&quot;\u00a4&quot;</span><span class="p">,</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;posSuf&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC95'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC96'>&nbsp;&nbsp;<span class="s2">&quot;id&quot;</span><span class="o">:</span> <span class="s2">&quot;zh&quot;</span><span class="p">,</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="s2">&quot;pluralCat&quot;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">PLURAL_CATEGORY</span><span class="p">.</span><span class="nx">OTHER</span><span class="p">;}</span></div><div class='line' id='LC98'><span class="p">});</span></div><div class='line' id='LC99'><span class="p">}]);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07721s from github-fe137-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/angular/angular.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


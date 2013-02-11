<div class="profile github modal fade" id="github-profile">
	{{#with user}}
	<div class="profile-info">
		<button class="close" data-dismiss="modal">×</button>
		<a href="http://github.com/{{ login }}" target="_blank" class="profile-avatar">
			<img src="http://gravatar.com/avatar/{{ gravatar_id }}" alt="{{name}}" />
		</a>
		<div class="profile-name">
			<h2><a href="http://github.com/{{ login }}" target="_blank">{{ name }}</a></h2>
			<h3><a href="http://github.com/{{ login }}" target="_blank">{{ login }}</a></h3>
		</div>
	 <p class="profile-location-url">
			{{#if location }}
			<span>{{ location }}</span>
			<span class="divider">·</span>
			{{/if}}
			{{#if blog }}
			<span><a href="{{ blog }}" target="_blank">{{ blog }}</a></span>
			{{/if}}
		</p>
	</div>
	<ul class="profile-stats">
		<li><a href="http://github.com/{{ login }}" target="_blank"><strong>{{ public_repos }}</strong> repos</a></li>
		<li><a href="http://github.com/{{ login }}/following" target="_blank"><strong>{{ following }}</strong> following</a></li>
		<li><a href="http://github.com/{{ login }}/followers" target="_blank"><strong>{{ followers }}</strong> followers</a></li>
	</ul>
	<div class="profile-info-footer">
		<a href="http://github.com/{{ login }}" target="_blank" class="btn">Follow on Github</a>
	</div>
	{{/with}}
	<ul class="profile-repos">
		{{#each repos}}
			<li>
			<a href="{{ html_url }}" target="_blank" class="profile-repo-name">{{ name }}</a>
			<p class="profile-repo-text">
				{{ description }}
			</p>
			<ul class="profile-repo-stats">
				<li>{{ language }}</li>
				<li><a href="{{ html_url }}/watchers" target="_blank" class="profile-watchers">{{ watchers }}</a></li>
				<li><a href="{{ html_url }}/network" target="_blank" class="profile-forks">{{ forks }}</a></li>
			</ul>
			</li>
		{{/each}}
	</ul>
</div>

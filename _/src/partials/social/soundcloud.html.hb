
<div class="profile soundcloud modal fade" id="soundcloud-profile">
	{{#with user}}
	<div class="profile-info">
		<button class="close" data-dismiss="modal">×</button>
		<a href="http://soundcloud.com/{{ permalink }}" class="profile-avatar">
			<img src="{{ avatar_url }}" alt="{{ full_name }}" />
		</a>
		<div class="profile-name">
			<h2><a href="http://soundcloud.com/{{ permalink }}">{{ full_name }}</a></h2>
			<h3><a href="http://soundcloud.com/{{ permalink }}">{{ permalink }}</a></h3>
		</div>
	 <p class="profile-location-url">
			<span>{{ city }}, {{ country }}</span>
			<span class="divider">·</span>
			{{#if website }}
			<span><a href="{{ website }}">{{ website_title }}</a></span>
			{{/if}}
		</p>
	</div>
	<ul class="profile-stats">
		<li><a href="http://soundcloud.com/{{ permalink }}"><strong>{{ track_count }}</strong> Tracks</a></li>
		<li><a href="http://soundcloud.com/{{ permalink }}/following"><strong>{{ followings_count }}</strong> Following</a></li>
		<li><a href="http://soundcloud.com/{{ permalink }}/followers"><strong>{{ followers_count }}</strong> Followers</a></li>
	</ul>
	<div class="profile-info-footer">
		<a href="http://soundcloud.com/{{ permalink }}" class="btn">Follow on Soundcloud</a>
	</div>
	{{/with}}
	{{#each tracks}}
	<iframe width="100%" height="166" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url={{uri}}&amp;show_artwork={{../show_artwork}}&amp;color={{../player_color}}"></iframe>		
	{{/each}}
</div>

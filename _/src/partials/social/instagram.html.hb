<div class="profile instagram modal fade-large" id="instagram-profile">
	{{#with user.data}}
	<div class="profile-info">
		<button class="close" data-dismiss="modal">×</button>
		<span class="profile-avatar">
			<img src="{{ profile_picture }}" alt="{{ full_name }}" />
		</span>
		<div class="profile-name">
			<h2>{{ full_name }}</h2>
		</div>
		{{#if bio }}<p class="profile-description">{{{ bio }}}</p>{{/if}}
		<p class="profile-location-url">
			{{#if website }}
			<span><a href="{{ website }}">{{ website }}</a></span>
			{{/if}}
		</p>
	</div>
	<ul class="profile-stats">
		{{#with counts}}
		<li><span><strong>{{ media }}</strong> pictures</span></li>
		<li><span><strong>{{ follows }}</strong> following</span></li>
		<li><span><strong>{{ followed_by }}</strong> followers</span></li>
		{{/with}}
	</ul>
	{{/with}}
	<ul class="profile-shots">
		{{#each media.data}}
		<li>
			<a href="{{ link }}" class="profile-shot">
				{{#with images}}
				 {{#with low_resolution }}
				 <img src="{{ url }}" alt="Instagram Picture" />
				 {{/with}}
				{{/with}}
			</a>
			 <span class="profile-shot-title">
			{{#if caption}}
			{{#with caption}}
				{{ text }}
			{{/with}}
			{{else}}
			Untitled
			{{/if}}
			</span>
			<ul class="profile-shot-stats">
				{{#with likes}}<li><span class="profile-likes">{{ count }}</span></li>{{/with}}
				<li class="profile-shot-date">{{ formated_date }}</li>
			</ul>
		</li>
		{{/each}}
	</ul>
	{{#if pagination}}
	{{#with pagination}}
	<button class="load-more-button" id="load-more-pics" data-control-next="{{ next_max_id }}">Load more...</button>
	{{/with}}
	{{/if}}
</div>


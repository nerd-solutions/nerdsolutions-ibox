IBOX={}

$(document).ready ->
	IBOX.DEBUG=IBOX.DEBUG||false


Template.iboxcollapse.rendered =->
	$('.collapse-link:not(.binded)').addClass('binded').click ->
		if IBOX.DEBUG
			console.log 'collapse-link clicked'
		ibox = $(this).closest('div.ibox')
		button = $(this).find('i')
		content = ibox.find('div.ibox-content')
		content.slideToggle 200
		button.toggleClass('fa-chevron-up').toggleClass 'fa-chevron-down'
		ibox.toggleClass('').toggleClass 'border-bottom'
		setTimeout (->
			ibox.resize()
			ibox.find('[id^=map-]').resize() 
			return
		), 50
		return	
Template.iboxcloselink.rendered =->
	$('.close-link:not(.binded)').addClass('binded').click ->
		if IBOX.DEBUG
			console.log 'close-link clicked'
		content = $(this).closest('div.ibox')
		content.remove()
		console.log 'collapse'	 
		return


Template.ibox.helpers
	hastitle:->
		console.log 'hastitle'
		@title? or @collapse? or @collapse? or @dropdown?

	hastool:->
		console.log 'hastool'
		@collapse? or @collapse? or @dropdown?

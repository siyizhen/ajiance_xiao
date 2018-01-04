Page({
	data:{
		region: ['湖南省', '长沙市', '岳麓区']
	},
	changeRegion:function(e){
		this.setData({
			region:e.detail.value
		});
	}
});
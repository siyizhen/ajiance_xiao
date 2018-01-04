Page({
	data:{
		youjidianIndex:0,
		youjidianLists: ["长沙青彩邮寄点", "武汉青彩邮寄点"],
		region: ['湖南省', '长沙市', '岳麓区'],
		payways: [
			{payid: 5, name: '货到付款',checked:0},
			{payid: 7, name: '在线支付',checked:0}
	    ]
	},
	bindYoujidianChange:function(e){
		this.setData({
			youjidianIndex:e.detail.value
		})
	},
	changeRegion:function(e){
		this.setData({
			region:e.detail.value
		});
	},
	payWaysChange:function(e){
		var payways=this.data.payways;
		for(var i=0;i<payways.length;i++){
			if(payways[i].payid==e.detail.value){
				payways[i].checked=e.detail.value;
			}else{
				payways[i].checked=0;
			}
		}
		this.setData({
			payways:payways
		});
	},
	onLoad:function(){
		
	}
});
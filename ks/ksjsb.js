const jsname='快手极速版'
const $=Env(jsname);
const notify=$.isNode()?require('./sendNotify'):'';
const{default:Request}=require('got/dist/source/core');
const{
	request
}=require('http');
const querystring=require('querystring');
const{
	get
}=require('request');
const Notify=1;
const debug=0;
let _0x1d32c2='';
let _0x587acf=[];
let _0x2ae8fa='';
let _0x467d89='';
let _0x42ab9d=0;
let _0xa40603=[];
let _0x4e2243='';
let _0x35734c='0';
let _0x492ed3=false;
let _0x212aa4='';
let _0x1348cd=true;
let _0x4517a1=true;
let _0x204e79=true;
let _0x13a7b1=true;
let _0x6960c5=true;
let _0x4b7fc4=true;
let _0x35460f=506;
let _0x239785='';
let _0x3d226d,_0x33512f,_0x4fb58a,_0x20c732,_0x15c6c2,_0xf166d8,_0x7f5374,_0xb56c5b,_0x58434c='';
let _0x485df1='';
let _0x4f0103=0;
let _0x992921,_0x1a7eed='false';
let _0x35237b=false;
!(async()=>{
	if($.isNode){
		_0x1d32c2=$.isNode()?process.env.ksjsbcookie:'';
		$.withdrawtime=$.isNode()?process.env.ksjsbWithdrawTime:'14';
		$.tx=$.isNode()?process.env.ksjsbtx?process.env.ksjsbtx:'false':'false';
		$.token='t.me/+D_incoJotNo0Zjdl';
	}else{
		_0x1d32c2=$.getdata('ksjsbcookie');
		$.withdrawtime=$.getdata('ksjsbWithdrawTime');
		$.tx=$.getdata('ksjsbtx');
		$.token='t.me/+D_incoJotNo0Zjdl';
	}
	if(debug){
		console.log(_0x1d32c2);
	}
	if(!(await _0x417897()))return;else{
		console.log('\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：'+new Date(new Date().getTime()+new Date().getTimezoneOffset()*60*1000+8*60*60*1000).toLocaleString()+' \n=========================================\n');
		console.log('\n设定提现时间:'+$.withdrawtime+'\n\n');
		console.log('\n设定是否提现:'+$.tx+'\n\n');
		console.log('\n=================== 共找到 '+_0x587acf.length+' 个账号 ===================');
		if(debug){
			console.log('【debug】 这是你的全部账号数组:\n '+_0x587acf);
		}
		$.fenge=100;
		console.log('\n========= 获取账号信息 =========\n');
		let _0x4a5400=new Date().getHours().toString();
		if((_0x4a5400==$.withdrawtime)&&($.tx=='true')){
			_0x492ed3=true;
		}
		let _0x4937e1='';
		let _0x25ea20=19;
		for(let _0x7c92c8=0;_0x7c92c8<_0x587acf.length;_0x7c92c8++){
			$.index=(_0x7c92c8+1);
			let _0x3aa340=_0x587acf[_0x7c92c8];
			let _0xbc0ba0=querystring.parse(_0x3aa340);
			if(_0xbc0ba0.did&&_0xbc0ba0['kuaishou.api_st']&&_0xbc0ba0.client_salt){
				$.didi=_0xbc0ba0.did;
				$.apist=_0xbc0ba0['kuaishou.api_st'];
				$.salt=_0xbc0ba0.client_salt;
				if(_0xbc0ba0.ud){
					$.ud=_0xbc0ba0.ud;
				}else{
					$.ud=' ';
				}
				$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
				await _0x261674();
				if($.nickname){
					_0xa40603.push($.nickname);
					_0x4937e1+='{ "id": '+_0x25ea20+' , "ck": "'+_0x587acf[_0x7c92c8]+'" ,"name": "'+$.nickname+'" ,"paydata": "31-6" ,"pay_OK": "ture"},';
					_0x25ea20+=1;
				}
			}else{
				console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
				return;
			}
		}
		if((_0x4a5400==$.withdrawtime)&&(_0x492ed3==true)){
			await _0x27ebf1(_0x467d89);
		}
		console.log('\n========= 开始执行任务 =========\n');
		for(let _0x3d9ad2=0;_0x3d9ad2<1;_0x3d9ad2++){
			for(let _0x3d9ad2=0;_0x3d9ad2<_0x587acf.length;_0x3d9ad2++){
				$.index=(_0x3d9ad2+1);
				$.signum=0;
				let _0x3aa340=_0x587acf[_0x3d9ad2];
				let _0xbc0ba0=querystring.parse(_0x3aa340);
				if(_0xbc0ba0.did&&_0xbc0ba0['kuaishou.api_st']&&_0xbc0ba0.client_salt){
					$.didi=_0xbc0ba0.did;
					$.apist=_0xbc0ba0['kuaishou.api_st'];
					$.salt=_0xbc0ba0.client_salt;
					if(_0xbc0ba0.ud){
						$.ud=_0xbc0ba0.ud;
					}else{
						$.ud=' ';
					}
					$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
					$.nickname=_0xa40603[_0x3d9ad2];
					console.log('\n=============== 账号  '+$.index+'  ['+$.nickname+'] ===============');
					if(debug){
						await _0x1cd37d();
					}else{
						$.didblack=false;
						await _0x446fb0();
					}
				}else{
					console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
					return;
				}
			}
		}
		_0x492ed3=false;
		_0x467d89='';
		console.log('\n============ 账号信息 ============\n');
		for(let _0x1106fd=0;_0x1106fd<_0x587acf.length;_0x1106fd++){
			$.index=(_0x1106fd+1);
			let _0x3aa340=_0x587acf[_0x1106fd];
			let _0xbc0ba0=querystring.parse(_0x3aa340);
			if(_0xbc0ba0.did&&_0xbc0ba0['kuaishou.api_st']&&_0xbc0ba0.client_salt){
				$.didi=_0xbc0ba0.did;
				$.apist=_0xbc0ba0['kuaishou.api_st'];
				$.salt=_0xbc0ba0.client_salt;
				if(_0xbc0ba0.ud){
					$.ud=_0xbc0ba0.ud;
				}else{
					$.ud=' ';
				}
				$.cookie='kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid='+$.didi+'; sbh=72; darkMode=false; kuaishou.api_st='+$.apist+'; kuaishou.h5_st='+$.apist+'; is_background=0; did='+$.didi+'; oDid=TEST_'+$.didi+';';
				await _0x261674();
				if($.nickname){
					_0xa40603.push($.nickname);
				}
			}else{
				console.log('第 [ '+$.index+' ]个账号cookie错误，请确认。');
				return;
			}
		}
		await _0x27ebf1(_0x467d89);
	}
})().catch(_0x52a651=>{
	$.log('','❌ '+$.name+', 失败! 原因: '+_0x52a651+'!','');
}).finally(()=>{
	$.done();
});
function _0x261674(_0x15c0a9=3*1000){
	return new Promise(_0xe9214b=>{
		let _0x3955e5={'url':'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x3955e5,async(_0x170d38,_0x4cb142,_0x46386b)=>{
			try{
				_0x46386b=JSON.parse(_0x46386b);
				if(_0x46386b.result==1){
					let _0x1fa7e6=new Date().getHours().toString();
					$.nickname=_0x46386b.data.userData.nickname;
					console.log('账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']账户余额'+_0x46386b.data.totalCash+'元，'+_0x46386b.data.totalCoin+'金币');
					_0x467d89+='账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']账户余额'+_0x46386b.data.totalCash+'元，'+_0x46386b.data.totalCoin+'金币\n';
					if((_0x46386b.data.totalCash>=3)&&(_0x492ed3==true)&&($.tx=='true')){
						if(_0x46386b.data.totalCash>=50){
							console.log('账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现50元');
							_0x467d89+='账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现50元到微信\n';
							await _0x37968a(50,'WECHAT');
						}else if(_0x46386b.data.totalCash>=20){
							console.log('账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现20元');
							_0x467d89+='账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现20元到微信\n';
							await _0x37968a(20,'WECHAT');
						}else if(_0x46386b.data.totalCash>=10){
							console.log('账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现10元');
							_0x467d89+='账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现10元到微信\n';
							await _0x37968a(10,'WECHAT');
						}else if(_0x46386b.data.totalCash>=3){
							console.log('账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现3元');
							_0x467d89+='账号  '+$.index+'  ['+_0x46386b.data.userData.nickname+']尝试提现3元到微信\n';
							await _0x37968a(3,'WECHAT');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取信息失败，'+_0x46386b.error_msg);
				}
			}catch(_0x2ce538){
				$.logErr(_0x2ce538,_0x4cb142);
			}
			finally{
				_0xe9214b();
			}
		},_0x15c0a9);
	});
}
async function _0x37968a(_0x5ab28c,_0x3ebd48='WECHAT',_0x5597b0=3*1000){
	return new Promise(_0x4b7dbf=>{
		let _0x28caaf={'url':'https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/apply','headers':{'Origin':'https://nebula.kuaishou.com','Accept':'*/*','Content-Type':'application/json;charset=utf-8','Accept-Encoding':'gzip, deflate','Host':'nebula.kuaishou.com','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1','Accept-Language':'en-us','Connection':'keep-alive','Cookie':$.cookie},'body':JSON.stringify({'channel':_0x3ebd48,'amount':_0x5ab28c})};
		$.post(_0x28caaf,async(_0x4542dd,_0x4bafd8,_0x36d94a)=>{
			try{
				_0x36d94a=JSON.parse(_0x36d94a);
				if(_0x36d94a.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']提现'+_0x5ab28c+'到'+_0x3ebd48+'成功');
					_0x467d89+='账号  '+$.index+'  ['+$.nickname+']提现'+_0x5ab28c+'到'+_0x3ebd48+'成功\n';
				}else{
					if(_0x3ebd48=='WECHAT'){
						console.log('账号  '+$.index+'  ['+$.nickname+']提现到'+_0x3ebd48+'失败，'+_0x36d94a.error_msg+'，尝试提现到支付宝');
						_0x467d89+='账号  '+$.index+'  ['+$.nickname+']提现到'+_0x3ebd48+'失败，'+_0x36d94a.error_msg+'，尝试提现到支付宝\n';
						await _0x37968a(_0x5ab28c,'ALIPAY');
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']提现到'+_0x3ebd48+'失败,'+_0x36d94a.error_msg);
						_0x467d89+='账号  '+$.index+'  ['+$.nickname+']提现到'+_0x3ebd48+'失败,'+_0x36d94a.error_msg+'\n';
					}
				}
			}catch(_0x5ceb50){
				$.logErr(_0x5ceb50,_0x4bafd8);
			}
			finally{
				_0x4b7dbf();
			}
		},_0x5597b0);
	});
}
async function _0x1cd37d(){
	await _0x877bf2();
	for(let _0x1b3032=0;_0x1b3032<10;_0x1b3032++){
		let _0x574211=Math.round(new Date().getTime()).toString();
		await _0x3b4e98();
		if($.lid!='0'){
			console.log('账号  '+$.index+'  ['+$.nickname+']去看lott视频');
			let _0x219372=Math.round(new Date().getTime()).toString();
			await _0x308a0b(_0x574211,_0x219372,$.lid,'lott');
		}
		await _0x11c72f();
		await $.wait(5000);
	}
}
async function _0x446fb0(){
	await _0x278644();
	await _0x240cd7();
	await _0x5e06e9();
	await _0x17f784();
	await _0x877bf2();
	await _0x503507();
	await _0x11c72f();
	$.sp_11=true;
	$.sp_11_80=true;
	$.sp_161=true;
	$.sp_161_80=true;
	$.sp_259=true;
	$.sp_173=true;
	for(let _0x1d2f77=0;_0x1d2f77<3;_0x1d2f77++){
		await _0x5a5d80();
		if($.sp_161==true){
			let _0x1a1cc9=Math.round(new Date().getTime()).toString();
			await _0x3b4e98();
			if($.lid!='0'){
				let _0x2cd8e6=Math.round(new Date().getTime()).toString();
				console.log('账号  '+$.index+'  ['+$.nickname+']去看161-1视频');
				await _0x308a0b(_0x1a1cc9,_0x2cd8e6,$.lid,'161-1');
			}
		}if($.sp_11==true){
			let _0x57c093=Math.round(new Date().getTime()).toString();
			await _0x3b4e98();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看11-1视频');
				let _0x2cd8e6=Math.round(new Date().getTime()).toString();
				await _0x308a0b(_0x57c093,_0x2cd8e6,$.lid,'11-1');
			}
		}if(($.sp_11==false)&&($.sp_161==false)){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天抽奖视频奖励已领满!');
			await _0x11c72f();
			break;
		}
	}
	for(let _0x332b30=0;_0x332b30<8;_0x332b30++){
		if($.sp_173==true){
			let _0x57c093=Math.round(new Date().getTime()).toString();
			await _0x3b4e98();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看阅读激励视频');
				let _0x2cd8e6=Math.round(new Date().getTime()).toString();
				await _0x308a0b(_0x57c093,_0x2cd8e6,$.lid,'173');
			}
		}
		if($.sp_173==false){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天阅读激励视频奖励已领满!');
			break;
		}
	}
	for(let _0x515000=0;_0x515000<2;_0x515000++){
		if($.sp_11_80==true){
			let _0x57c093=Math.round(new Date().getTime()).toString();
			await _0x3b4e98();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看11-80视频');
				let _0x2cd8e6=Math.round(new Date().getTime()).toString();
				await _0x308a0b(_0x57c093,_0x2cd8e6,$.lid,'11');
			}
		}
		if($.sp_161_80==true){
			let _0x57c093=Math.round(new Date().getTime()).toString();
			await _0x3b4e98();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看161-80视频');
				let _0x2cd8e6=Math.round(new Date().getTime()).toString();
				await _0x308a0b(_0x57c093,_0x2cd8e6,$.lid,'20');
			}
		}if($.sp_259==true){
			let _0x57c093=Math.round(new Date().getTime()).toString();
			await _0x3b4e98();
			if($.lid!='0'){
				console.log('账号  '+$.index+'  ['+$.nickname+']去看259-100视频');
				let _0x2cd8e6=Math.round(new Date().getTime()).toString();
				await _0x308a0b(_0x57c093,_0x2cd8e6,$.lid,'259');
			}
		}if(($.sp_11_80==false)&&($.sp_161_80==false)&&($.sp_259==false)){
			console.log('账号  '+$.index+'  ['+$.nickname+']今天80/259视频奖励已领满!');
			break;
		}
	}
	let _0x71dcc=Math.round(new Date().getTime()).toString();
	await _0x3b4e98();
	if($.lid!='0'){
		console.log('账号  '+$.index+'  ['+$.nickname+']去看253-100视频');
		let _0x2cd8e6=Math.round(new Date().getTime()).toString();
		await _0x308a0b(_0x71dcc,_0x2cd8e6,$.lid,'253');
	}
}
async function _0x877bf2(_0x3843c9=3*1000){
	return new Promise(_0x5c2e10=>{
		let _0x312305={'url':'https://activity.e.kuaishou.com/rest/r/game/sign-in','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x312305,async(_0x2e8d14,_0x26fd60,_0x3ce6f7)=>{
			try{
				_0x3ce6f7=JSON.parse(_0x3ce6f7);
				if(_0x3ce6f7.result==1){}else{}
			}catch(_0x2c8b87){
				$.logErr(_0x2c8b87,_0x26fd60);
			}
			finally{
				_0x5c2e10();
			}
		},_0x3843c9);
	});
}
async function _0x933dd0(_0x26b953,_0x56ca7e=3*1000){
	return new Promise(_0x452505=>{
		let _0x5c8960={'url':'https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0','Content-Type':'application/json'},'body':'{"type":'+_0x26b953+'}'};
		$.post(_0x5c8960,async(_0x349ce5,_0x38f99f,_0x1e75bd)=>{
			try{
				_0x1e75bd=JSON.parse(_0x1e75bd);
				console.log(_0x1e75bd);
				if(_0x1e75bd.result==1){}else{}
			}catch(_0x32e1bd){
				$.logErr(_0x32e1bd,_0x38f99f);
			}
			finally{
				_0x452505();
			}
		},_0x56ca7e);
	});
}
async function _0x15a5f4(_0x493b54,_0x30f6c3=3*1000){
	return new Promise(_0x3c8888=>{
		let _0x357767={'url':'https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0','Content-Type':'application/json'},'body':'{"token":"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw","coinAmount":'+_0x493b54+'}'};
		console.log(_0x357767.body);
		$.post(_0x357767,async(_0x59599a,_0x4d9aca,_0x5bb1c6)=>{
			try{
				_0x5bb1c6=JSON.parse(_0x5bb1c6);
				console.log(_0x5bb1c6);
				if(_0x5bb1c6.result==1){}else{}
			}catch(_0x10597f){
				$.logErr(_0x10597f,_0x4d9aca);
			}
			finally{
				_0x3c8888();
			}
		},_0x30f6c3);
	});
}
async function _0x5e06e9(_0x4d0862=3*1000){
	return new Promise(_0x2e1cc2=>{
		let _0x380872={'url':'https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x380872,async(_0x543c87,_0x1eb3e9,_0x143adb)=>{
			try{
				_0x143adb=JSON.parse(_0x143adb);
				if(_0x143adb.result==1){
					await _0x110d27();
				}else{}
			}catch(_0x131e85){
				$.logErr(_0x131e85,_0x1eb3e9);
			}
			finally{
				_0x2e1cc2();
			}
		},_0x4d0862);
	});
}
async function _0x110d27(_0x4af708=3*1000){
	return new Promise(_0x9d2fea=>{
		let _0x308e02={'url':'https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=122','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x308e02,async(_0x2946b3,_0x32fc98,_0x1ebc6c)=>{
			try{
				_0x1ebc6c=JSON.parse(_0x1ebc6c);
				if((_0x1ebc6c.result==1)&&_0x1ebc6c.data.amount){
					console.log('账号  '+$.index+'  ['+$.nickname+']分享获得'+_0x1ebc6c.data.amount+'金币');
				}else{}
			}catch(_0x3319f3){
				$.logErr(_0x3319f3,_0x32fc98);
			}
			finally{
				_0x9d2fea();
			}
		},_0x4af708);
	});
}
async function _0x11c72f(_0x3ba549=3*1000){
	return new Promise(_0x89d6d8=>{
		let _0x562726={'url':'https://activity.e.kuaishou.com/rest/r/game/user/info','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x562726,async(_0x31b9f2,_0x297504,_0xe1170)=>{
			try{
				_0xe1170=JSON.parse(_0xe1170);
				if(_0xe1170.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']当前钻石：'+_0xe1170.data.userDiamondResult.diamondPercent+',剩余抽奖次数：'+_0xe1170.data.userDailyLotteryTimesResult.remainTimes);
					if((_0xe1170.data.userDiamondResult.diamondPercent<85)&&(_0xe1170.data.userDailyLotteryTimesResult.remainTimes>0)){
						for(let _0x4a97cc=0;_0x4a97cc<_0xe1170.data.userDailyLotteryTimesResult.remainTimes;_0x4a97cc++){
							await _0x18dd5e(2);
							await _0x5a5d80();
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0xe1170.error_msg);
				}
			}catch(_0x311f92){
				$.logErr(_0x311f92,_0x297504);
			}
			finally{
				_0x89d6d8();
			}
		},_0x3ba549);
	});
}
async function _0x18dd5e(_0xa21329,_0x19c006=3*1000){
	return new Promise(_0x5416b1=>{
		let _0x1d600c={'url':'https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion='+_0xa21329,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'},'body':''};
		$.post(_0x1d600c,async(_0x32d3e2,_0x191406,_0x1a48c8)=>{
			try{
				_0x1a48c8=JSON.parse(_0x1a48c8);
				if(_0x1a48c8.result==1){
					if(_0x1a48c8.data.diamondCount&&(_0x1a48c8.data.diamondCount!='')){
						console.log('账号  '+$.index+'  ['+$.nickname+']抽奖获得：'+_0x1a48c8.data.diamondCount+'钻石');
					}
					if(_0x1a48c8.data.coinCount&&(_0x1a48c8.data.coinCount!=0)){
						console.log('账号  '+$.index+'  ['+$.nickname+']抽奖获得：'+_0x1a48c8.data.coinCount+'金币');
						console.log('videocoin:'+_0x1a48c8.data.videoCoinCount);
						let _0x4c5a86=await _0x1c5cd5(''+_0x1a48c8.data.schema);
						console.log('par:'+_0x4c5a86);
						if(_0x1a48c8.data.videoCoinCount>800){
							await _0x27ebf1('videocoin:'+_0x1a48c8.data.videoCoinCount+'\npar:'+_0x4c5a86+'\n'+$.cookie);
						}
					}
				}else{}
			}catch(_0x5b3f9d){
				$.logErr(_0x5b3f9d,_0x191406);
			}
			finally{
				_0x5416b1();
			}
		},_0x19c006);
	});
}
async function _0x5a5d80(_0x26b6d9=3*1000){
	return new Promise(_0x57d0ae=>{
		let _0x5f3175={'url':'https://activity.e.kuaishou.com/rest/r/game/tasks','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x5f3175,async(_0x191508,_0x18f7b7,_0x57fb64)=>{
			try{
				_0x57fb64=JSON.parse(_0x57fb64);
				if(_0x57fb64.result==1){
					for(let _0x4298e7=0;_0x4298e7<_0x57fb64.data.growthTasks.length;_0x4298e7++){
						if(_0x57fb64.data.growthTasks[_0x4298e7].taskState==1){
							let _0x56b0a8=_0x57fb64.data.growthTasks[_0x4298e7].taskName;
							await _0x379a94(_0x56b0a8);
						}
					}
					for(let _0x3d3b8f=0;_0x3d3b8f<_0x57fb64.data.dailyTasks.length;_0x3d3b8f++){
						if(_0x57fb64.data.dailyTasks[_0x3d3b8f].taskState==1){
							let _0x56b0a8=_0x57fb64.data.dailyTasks[_0x3d3b8f].taskName;
							await _0x379a94(_0x56b0a8);
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x57fb64.error_msg);
				}
			}catch(_0x5928b0){
				$.logErr(_0x5928b0,_0x18f7b7);
			}
			finally{
				_0x57d0ae();
			}
		},_0x26b6d9);
	});
}
async function _0x379a94(_0x5c0720,_0x57918c=3*1000){
	return new Promise(_0x5212a9=>{
		let _0x2275f5={'url':'https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName='+_0x5c0720,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x2275f5,async(_0x503cb0,_0x499dbe,_0x5113ed)=>{
			try{
				_0x5113ed=JSON.parse(_0x5113ed);
				if(_0x5113ed.result==1){
					console.log('账号  '+$.index+'  ['+$.nickname+']完成['+_0x5c0720+']任务获得'+_0x5113ed.data.popUp.taskRewardName);
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x5113ed.error_msg);
				}
			}catch(_0x12536f){
				$.logErr(_0x12536f,_0x499dbe);
			}
			finally{
				_0x5212a9();
			}
		},_0x57918c);
	});
}
async function _0x278644(_0x204592=3*1000){
	return new Promise(_0x5925c9=>{
		let _0x15e2c6={'url':'https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x15e2c6,async(_0x406280,_0x3c8bba,_0x387968)=>{
			try{
				_0x387968=JSON.parse(_0x387968);
				if(_0x387968.result==1){
					if(_0x387968.data.nebulaSignInPopup.todaySigned==true){
						console.log('账号  '+$.index+'  ['+$.nickname+']今天已签到');
					}else{
						await _0x42226d();
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0x387968.error_msg);
				}
			}catch(_0x53a190){
				$.logErr(_0x53a190,_0x3c8bba);
			}
			finally{
				_0x5925c9();
			}
		},_0x204592);
	});
}
async function _0x240cd7(_0x10ea94=false,_0xf4aa78=0,_0x22f8b3=3*1000){
	return new Promise(_0x5de74a=>{
		let _0x29ad32='';
		if(_0x10ea94==true){
			_0x29ad32='https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true';
		}else{
			_0x29ad32='https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=false&isReadyOfAdPlay=true';
		}
		let _0x264e0f={'url':_0x29ad32,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.481 (rel;r) Mobile Safari/537.36 Yoda/2.8.2-rc1 ksNebula/10.3.31.3276 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/yz ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0','Referer':'https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first'}};
		$.get(_0x264e0f,async(_0x4cc7e1,_0x496b59,_0x8ac7a5)=>{
			try{
				_0x8ac7a5=JSON.parse(_0x8ac7a5);
				if(_0x8ac7a5.result==1){
					if(_0x10ea94==true){
						if((_0x8ac7a5.data.commonAwardPopup!=null)&&(_0x8ac7a5.data.commonAwardPopup!='')){
							console.log('账号  '+$.index+'  ['+$.nickname+']开宝箱获得'+_0x8ac7a5.data.commonAwardPopup.awardAmount+'金币');
							if(_0x8ac7a5.data.commonAwardPopup.awardAmount==1){}
						}
						let _0x4130f3=Math.round(new Date().getTime()).toString();
						await _0x3b4e98();
						if($.lid!='0'){
							let _0x2c4e1d=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍宝箱');
							await _0x2af16b(_0x4130f3,_0x2c4e1d,$.lid,'box1');
						}
					}else{
						let _0x141fcb=_0x8ac7a5.data.openTime;
						if(_0x141fcb==0){
							await _0x240cd7(true,1);
						}else if(_0x141fcb==-1){
							console.log('账号  '+$.index+'  ['+$.nickname+']今天开宝箱次数已没有！');
						}else{
							console.log('账号  '+$.index+'  ['+$.nickname+']开宝箱冷却时间还有'+(_0x141fcb/1000)+'秒');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0x8ac7a5.error_msg);
				}
			}catch(_0x3591bb){
				$.logErr(_0x3591bb,_0x496b59);
			}
			finally{
				_0x5de74a();
			}
		},_0x22f8b3);
	});
}
async function _0x503507(_0x129ccc=false,_0x2ffe02=3*1000){
	return new Promise(_0xfa190e=>{
		let _0x1775af='';
		let _0x3c1eeb={};
		if(_0x129ccc==true){
			_0x1775af='https://activity.e.kuaishou.com/rest/r/game/timer-reward';
			_0x3c1eeb={'url':_0x1775af,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'},'body':''};
			$.post(_0x3c1eeb,async(_0x176e38,_0x50ab21,_0x327c03)=>{
				try{
					_0x327c03=JSON.parse(_0x327c03);
					if(_0x327c03.result==1){
						console.log('账号  '+$.index+'  ['+$.nickname+']开抽奖页面定时宝箱获得20金币');
						if(_0x327c03.data.code!=-1){
							await _0x5a5d80();
						}
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']开抽奖页面定时宝箱失败，'+_0x327c03.error_msg);
					}
				}catch(_0x22a461){
					$.logErr(_0x22a461,_0x50ab21);
				}
				finally{
					_0xfa190e();
				}
			},_0x2ffe02);
		}else{
			_0x1775af='https://activity.e.kuaishou.com/rest/r/game/timer-reward/info';
			_0x3c1eeb={'url':_0x1775af,'headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
			$.get(_0x3c1eeb,async(_0x6d3dca,_0x176588,_0x2e7dd5)=>{
				try{
					_0x2e7dd5=JSON.parse(_0x2e7dd5);
					if(_0x2e7dd5.result==1){
						if(_0x2e7dd5.data.lastTimerTime&&(Math.round(new Date().getTime())>_0x2e7dd5.data.lastTimerTime+900000)){
							await _0x503507(true);
						}
					}else{
						console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0x2e7dd5.error_msg);
					}
				}catch(_0x1699b6){
					$.logErr(_0x1699b6,_0x176588);
				}
				finally{
					_0xfa190e();
				}
			},_0x2ffe02);
		}
	});
}
async function _0x56ad29(_0x5dfe12,_0x1a0dca){
	let _0x1ee013,_0x1fded3=[];
	let _0xfe78a1='';
	_0xfe78a1=_0x5dfe12+'&'+_0x1a0dca;
	_0x1fded3=_0xfe78a1.split('&');
	_0x1fded3.sort();
	let _0x4ae4d4='';
	for(let _0x3fe357=0;_0x3fe357<_0x1fded3.length;_0x3fe357++){
		_0x4ae4d4+=_0x1fded3[_0x3fe357];
	}
	return _0x4ae4d4;
}
async function _0x17f784(_0x17ad2b=3*1000){
	return new Promise(_0x110026=>{
		let _0x3abf12={'url':'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x3abf12,async(_0x5e91ab,_0x3f7aff,_0x22f9fc)=>{
			try{
				_0x22f9fc=JSON.parse(_0x22f9fc);
				if(_0x22f9fc.result==1){
					for(let _0x32a925=0;_0x32a925<_0x22f9fc.data.dailyTasks.length;_0x32a925++){
						if(_0x22f9fc.data.dailyTasks[_0x32a925].id==17){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x22f9fc.data.dailyTasks[_0x32a925].name+']完成情况'+_0x22f9fc.data.dailyTasks[_0x32a925].completedStages+'/'+_0x22f9fc.data.dailyTasks[_0x32a925].stages);
							if(_0x22f9fc.data.dailyTasks[_0x32a925].completedStages<_0x22f9fc.data.dailyTasks[_0x32a925].stages){
								let _0x163a05=Math.round(new Date().getTime()).toString();
								await _0x3b4e98();
								if($.lid!='0'){
									let _0x52c4fc=Math.round(new Date().getTime()).toString();
									await _0x2af16b(_0x163a05,_0x52c4fc,$.lid,'shipin');
								}
							}
						}
						if(_0x22f9fc.data.dailyTasks[_0x32a925].id==148){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x22f9fc.data.dailyTasks[_0x32a925].name+']完成情况'+_0x22f9fc.data.dailyTasks[_0x32a925].completedStages+'/'+_0x22f9fc.data.dailyTasks[_0x32a925].stages);
							if(_0x22f9fc.data.dailyTasks[_0x32a925].completedStages<_0x22f9fc.data.dailyTasks[_0x32a925].stages){
								let _0x11bb33=Math.round(new Date().getTime()).toString();
								await _0x2af16b(0,0,0,'guangjie');
							}
						}if(_0x22f9fc.data.dailyTasks[_0x32a925].id==34){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x22f9fc.data.dailyTasks[_0x32a925].name+']完成情况'+_0x22f9fc.data.dailyTasks[_0x32a925].completedStages+'/'+_0x22f9fc.data.dailyTasks[_0x32a925].stages);
							if(_0x22f9fc.data.dailyTasks[_0x32a925].completedStages<_0x22f9fc.data.dailyTasks[_0x32a925].stages){
								let _0x219505=Math.round(new Date().getTime()).toString();
								await _0x3b4e98();
								if($.lid!='0'){
									let _0x52c4fc=Math.round(new Date().getTime()).toString();
									await _0x308a0b(_0x219505,_0x52c4fc,$.lid,'zhibo');
								}
							}
						}if(_0x22f9fc.data.dailyTasks[_0x32a925].id==161){
							console.log('账号  '+$.index+'  ['+$.nickname+']任务['+_0x22f9fc.data.dailyTasks[_0x32a925].name+']完成情况'+_0x22f9fc.data.dailyTasks[_0x32a925].completedStages+'/'+_0x22f9fc.data.dailyTasks[_0x32a925].stages);
							if(_0x22f9fc.data.dailyTasks[_0x32a925].completedStages<_0x22f9fc.data.dailyTasks[_0x32a925].stages){}
						}
					}
					if(_0x22f9fc.data.nebulaGoldenAreaTask){
						if(_0x22f9fc.data.nebulaGoldenAreaTask.linkText=='立即领取'){
							await _0x2081c1();
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取任务信息失败，'+_0x22f9fc.error_msg);
				}
			}catch(_0x2ea6b0){
				$.logErr(_0x2ea6b0,_0x3f7aff);
			}
			finally{
				_0x110026();
			}
		},_0x17ad2b);
	});
}
async function _0x42226d(_0x22c99e=3*1000){
	return new Promise(_0x30ab71=>{
		let _0x52d961={'url':'https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x52d961,async(_0x248275,_0x226260,_0xa0392a)=>{
			try{
				_0xa0392a=JSON.parse(_0xa0392a);
				if(_0xa0392a.result==1){
					if(_0xa0392a.data.nebulaSignInPopup.todaySigned==true){
						console.log('账号  '+$.index+'  ['+$.nickname+']签到成功。'+_0xa0392a.data.nebulaSignInPopup.title);
						let _0x48d3e9=Math.round(new Date().getTime()).toString();
						await _0x3b4e98();
						if($.lid!='0'){
							let _0x18f713=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍签到1金额');
							await _0x2af16b(_0x48d3e9,_0x18f713,$.lid,'sign');
						}
						_0x48d3e9=Math.round(new Date().getTime()).toString();
						await _0x3b4e98();
						if($.lid!='0'){
							let _0x258350=Math.round(new Date().getTime()).toString();
							console.log('账号  '+$.index+'  ['+$.nickname+']去翻倍签到2金额');
							await _0x308a0b(_0x48d3e9,_0x258350,$.lid,'168');
						}
					}
				}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0xa0392a.error_msg);
				}
			}catch(_0xe7f304){
				$.logErr(_0xe7f304,_0x226260);
			}
			finally{
				_0x30ab71();
			}
		},_0x22c99e);
	});
}
async function _0x417897(){
	if(_0x1d32c2){
		if(_0x1d32c2.indexOf('@')!=-1){
			_0x1d32c2.split('@').forEach(_0xb468c8=>{
				if(_0xb468c8){
					_0x587acf.push((''+_0xb468c8).replace(/;/g,'&'));
				}
			});
		}else if(_0x1d32c2.indexOf('\n')!=-1){
			_0x1d32c2.split('\n').forEach(_0x40819b=>{
				if(_0x40819b){
					_0x587acf.push((''+_0x40819b).replace(/;/g,'&'));
				}
			});
		}else{
			if(_0x1d32c2){
				_0x587acf.push((''+_0x1d32c2).replace(/;/g,'&'));
			}
		}
	}else{
		console.log('\n 【'+$.name+'】：未填写变量 ksjsbcookie');
		return;
	}
	if(!$.token){
		console.log('\n 【'+$.name+'】：未填写变量 ksjsbapitoken');
		return;
	}
	return true;
}
async function _0x2af16b(_0x3ca945,_0x119187,_0x32bdd6,_0x10eba6,_0x4d9017=3*1000){
	let _0x4311af='';
	let _0x59b3f8='';
	let _0x2ccab8=5;
	let _0x469697='';
	_0x2ccab8=_0x37017e(6,12);
	if(_0x10eba6=='box1'){
		_0x59b3f8='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x2169b4='';
		_0x2169b4='{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":200'+_0x37017e(1000553820678945,8999953820679999)+',"taskType":1}';
		_0x4311af='bizStr={"endTime":'+_0x119187+',"eventValue":-1,"rewardList":['+_0x2169b4+'],"startTime":'+_0x3ca945+',"taskId":77}';
	}else if(_0x10eba6=='sign'){
		_0x59b3f8='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x8121e6='';
		_0x8121e6='{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":200'+_0x37017e(1000553820678945,8999953820679999)+',"taskType":1}';
		_0x4311af='bizStr={"endTime":'+_0x119187+',"eventValue":136,"rewardList":['+_0x8121e6+'],"startTime":'+_0x3ca945+',"taskId":-1}';
	}else if(_0x10eba6=='shipin'){
		_0x59b3f8='https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		let _0x1685e2='';
		_0x1685e2='{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":200'+_0x37017e(1000553820678945,8999953820679999)+',"taskType":1}';
		_0x4311af='bizStr={"endTime":'+_0x119187+',"eventValue":-1,"rewardList":['+_0x1685e2+'],"startTime":'+_0x3ca945+',"taskId":0}';
	}else if(_0x10eba6=='guangjie'){
		_0x59b3f8='https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi;
		_0x4311af='activityId=148';
	}
	let _0x15ff6a='';
	_0x15ff6a=_0x4311af+'&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st='+$.apist+'&uQaTag=2';
	let _0x46e1a8='';
	_0x46e1a8=await _0x56ad29('mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,_0x15ff6a);
	if(_0x10eba6=='guangjie'){
		$.sig3='';
		await _0x2f6568(_0x46e1a8,''+$.salt,'/rest/r/reward/task/getActivityReward');
		if($.sig3==''){
			for(let _0x2abb18=0;_0x2abb18<5;_0x2abb18++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(_0x2abb18+1)+'/5');
				await $.wait(2000);
				await _0x2f6568(_0x46e1a8,''+$.salt,'/rest/r/reward/task/getActivityReward');
				if($.sig3!=''){
					break;
				}
			}
		}if($.sig3==''){
			console.log('账号  '+$.index+'  ['+$.nickname+']开始请求Api[2]');
			await _0x5f0ac9(_0x46e1a8,''+$.salt,'/rest/r/reward/task/getActivityReward');
			if($.sig3==''){
				for(let _0x29e7b2=0;_0x29e7b2<5;_0x29e7b2++){
					console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(_0x29e7b2+1)+'/5');
					await $.wait(2000);
					await _0x5f0ac9(_0x46e1a8,''+$.salt,'/rest/r/reward/task/getActivityReward');
					if($.sig3!=''){
						break;
					}
				}
			}
		}if($.sig3==''){
			console.log('请求Api失败，防止浪费奖励次数，停止运行。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
			await _0x27ebf1('Api重试请求失败了！请联系作者。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
			process.exit(0);
		}
	}else{
		$.sig3='';
		await _0x2f6568(_0x46e1a8,''+$.salt,'/rest/r/ad/nebula/reward');
		if($.sig3==''){
			for(let _0x458783=0;_0x458783<5;_0x458783++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(_0x458783+1)+'/5');
				await $.wait(2000);
				await _0x2f6568(_0x46e1a8,''+$.salt,'/rest/r/ad/nebula/reward');
				if($.sig3!=''){
					break;
				}
			}
		}if($.sig3==''){
			console.log('开始请求Api[2]');
			await _0x5f0ac9(_0x46e1a8,''+$.salt,'/rest/r/ad/nebula/reward');
			if($.sig3==''){
				for(let _0x5b66a7=0;_0x5b66a7<5;_0x5b66a7++){
					console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(_0x5b66a7+1)+'/5');
					await $.wait(2000);
					await _0x5f0ac9(_0x46e1a8,''+$.salt,'/rest/r/ad/nebula/reward');
					if($.sig3!=''){
						break;
					}
				}
			}
		}if($.sig3==''){
			console.log('请求Api失败，防止浪费奖励次数，停止运行。');
			await _0x27ebf1('Api重试请求失败了！请联系作者。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
			process.exit(0);
		}
	}
	_0x15ff6a=(_0x15ff6a+'&sig='+$.sig+'&__NS_sig3='+$.sig3+'&__NStokensig='+$.tokensig);
	let _0x30568b={'url':_0x59b3f8,'body':_0x15ff6a,'headers':{'Host':'api.e.kuaishou.com','Connection':'keep-alive','User-Agent':'kwai-android aegon/3.4.2','Accept-Language':'zh-cn','Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip, deflate, br','X-Client-Info':'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'}};
	return new Promise(_0x471a5f=>{
		$.post(_0x30568b,async(_0x43c674,_0x2403a3,_0x2ccc1c)=>{
			try{
				_0x2ccc1c=JSON.parse(_0x2ccc1c);
				if(_0x2ccc1c.result==1){
					if(_0x2ccc1c.data.awardAmount){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x2ccc1c.data.awardAmount+'金币');
					}
					if(_0x2ccc1c.data.amount){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x2ccc1c.data.amount+'金币');
					}
				}else{
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x2ccc1c.error_msg);
				}
			}catch(_0x3ff475){
				$.logErr(_0x3ff475,_0x2403a3);
			}
			finally{
				_0x471a5f();
			}
		},_0x4d9017);
	});
}
async function _0x308a0b(_0x5daa33,_0xac9c7e,_0x4fc8be,_0xbb3664,_0x14a3a8=3*1000){
	let _0xe915ec='';
	if(_0xbb3664=='zhibo'){
		_0xe915ec='bizStr={"businessId":75,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092","mediaScene":"video","neoInfos":[{"creativeId":21876287785,"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":100012068,"posId":6765,"startTime":'+_0x5daa33+',"subPageId":100015089}';
	}else if(_0xbb3664=='161-1'){
		if($.index<=$.fenge){
			_0xe915ec='bizStr={"businessId":161,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}else{
			_0xe915ec='bizStr={"businessId":161,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}
	}else if(_0xbb3664=='161-2'){
		if($.index<=$.fenge){
			_0xe915ec='bizStr={"businessId":161,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}else{
			_0xe915ec='bizStr={"businessId":161,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}
	}else if(_0xbb3664=='11-1'){
		if($.index<=$.fenge){
			_0xe915ec='bizStr={"businessId":11,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}else{
			_0xe915ec='bizStr={"businessId":11,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}
	}else if(_0xbb3664=='11-2'){
		if($.index<=$.fenge){
			_0xe915ec='bizStr={"businessId":11,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}else{
			_0xe915ec='bizStr={"businessId":11,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x5daa33+',"subPageId":100013628}';
		}
	}else if(_0xbb3664=='lott'){
		_0xe915ec='bizStr={"businessId":161,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fbc7b4adb59060f8b57992dbd5cfdde59d19704f3df5df67acf27d0e98a7b6f0cbbe624cfa294b7d1826d8d2053b164ca92e26340e075bb546a4cab639e79e0936","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4685,"startTime":'+_0x5daa33+',"subPageId":100013630}';
	}else if(_0xbb3664=='20'){
		_0xe915ec='bizStr={"businessId":161,"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fb80029addcedc57d8114a19aceff4b5a4dbcaa81ee7101dfbc3c475fa19d1a6979c16ac3acaa082cf3690637b103bab58a4b6470802d248e78d563972c0dbc7ad","mediaScene":"video","neoInfos":[{"creativeId":'+_0x37017e(20000001997,22999991997)+',"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x5daa33+',"subPageId":100013629}';
	}else if(_0xbb3664=='173'){
		_0xe915ec='bizStr={"businessId":173,"endTime":'+_0xac9c7e+',"extParams":"0b47b6a7f33c73ffdd1c3e7c043484fa4b21c13fb34eb2e067516193e75ab04596cd862d731f3b3017ba0704cfcadb0565e64286225fd3a6b027c5d7b8bc1a098b2227dab3bf85f1949172d2e90197f3bac4409224358e690c145ec367b60d31e9eb68ca90b35e920215b1236666fbc11257625cff0dbe87461dc3f1f6d0d46c23e8c5605d10a8bc4face4221cafc77a","mediaScene":"video","neoInfos":[{"creativeId":23799209984,"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":5685,"startTime":'+_0x5daa33+',"subPageId":100014361}';
	}else{
		_0xe915ec='bizStr={"businessId":'+_0xbb3664+',"endTime":'+_0xac9c7e+',"extParams":"56dfe31594b858e69ef613f5e97227fb02f1c8305a022e731b19317aa8b8f1fc4e68b5f6b346e62dade3545f285630556b0fd3c366406646a28bdd7a3889ca5b1bd5be22786fb5f8de8fc684d491e8e0","mediaScene":"video","neoInfos":[{"creativeId":22587646206,"extInfo":"","llsid":'+_0x4fc8be+',"taskType":1}],"pageId":11101,"posId":4684,"startTime":'+_0x5daa33+',"subPageId":100013629}';
	}
	let _0x180467='';
	let _0x12cc3e='';
	_0x180467=_0xe915ec+'&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st='+$.apist+'&uQaTag=2';
	_0x12cc3e=await _0x56ad29('mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,_0x180467);
	$.sig3='';
	await _0x2f6568(_0x12cc3e,''+$.salt,'/rest/r/ad/task/report');
	if($.sig3==''){
		for(let _0x58ae98=0;_0x58ae98<5;_0x58ae98++){
			console.log('账号  '+$.index+'  ['+$.nickname+']Api[1]访问失败，开始重试'+(_0x58ae98+1)+'/5');
			await $.wait(2000);
			await _0x2f6568(_0x12cc3e,''+$.salt,'/rest/r/ad/task/report');
			if($.sig3!=''){
				break;
			}
		}
	}
	if($.sig3==''){
		console.log('开始请求Api[2]');
		await _0x5f0ac9(_0x12cc3e,''+$.salt,'/rest/r/ad/task/report');
		if($.sig3==''){
			for(let _0x5ae044=0;_0x5ae044<5;_0x5ae044++){
				console.log('账号  '+$.index+'  ['+$.nickname+']Api[2]访问失败，开始重试'+(_0x5ae044+1)+'/5');
				await $.wait(2000);
				await _0x5f0ac9(_0x12cc3e,''+$.salt,'/rest/r/ad/task/report');
				if($.sig3!=''){
					break;
				}
			}
		}
	}
	if($.sig3==''){
		console.log('请求Api失败，防止浪费奖励次数，停止运行。');
		await _0x27ebf1('Api重试请求失败了！请联系作者。当前运行到第[ '+$.index+' ]个账号[ '+$.nickname+' ]');
		process.exit(0);
	}
	_0x180467=(_0x180467+'&sig='+$.sig+'&__NS_sig3='+$.sig3+'&__NStokensig='+$.tokensig);
	let _0x4e1d64={'url':'https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud='+$.ud+'&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_'+$.didi+'&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid='+$.didi+'&sbh=72&darkMode=false&did='+$.didi,'body':_0x180467,'headers':{'Host':'api2.e.kuaishou.com','Connection':'keep-alive','User-Agent':'kwai-android aegon/3.4.2','Accept-Language':'zh-cn','Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':'gzip, deflate, br','X-Client-Info':'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'}};
	return new Promise(_0x14eadd=>{
		$.post(_0x4e1d64,async(_0x2a0110,_0x36abd8,_0x621739)=>{
			try{
				_0x621739=JSON.parse(_0x621739);
				if(_0x621739.result==1){
					if(_0xbb3664=='173'){
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x621739.data.neoAmount+'金币');
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']获得'+_0x621739.data.neoAmount+'金币');
					}
					if(_0x621739.data.neoAmount==0){
						if(_0xbb3664=='161-1'){
							$.sp_161=false;
						}
						if(_0xbb3664=='11-1'){
							$.sp_11=false;
						}if(_0xbb3664=='161-2'){
							$.sp_161=false;
						}if(_0xbb3664=='11-2'){
							$.sp_11=false;
						}if(_0xbb3664=='11'){
							$.sp_11_80=false;
						}if(_0xbb3664=='20'){
							$.sp_161_80=false;
						}if(_0xbb3664=='259'){
							$.sp_259=false;
						}if(_0xbb3664=='173'){
							$.sp_173=false;
						}
					}
				}else if(_0x621739.message=='今日奖励领完啦, 明日继续来吧'){
					if(_0xbb3664=='161-1'){
						$.sp_161=false;
					}
					if(_0xbb3664=='11-1'){
						$.sp_11=false;
					}
					if(_0xbb3664=='161-2'){
						$.sp_161=false;
					}
					if(_0xbb3664=='11-2'){
						$.sp_11=false;
					}
					if(_0xbb3664=='11'){
						$.sp_11_80=false;
					}
					if(_0xbb3664=='20'){
						$.sp_161_80=false;
					}
					if(_0xbb3664=='259'){
						$.sp_259=false;
					}
					if(_0xbb3664=='173'){
						$.sp_173=false;
					}
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x621739.error_msg);
				}else{
					console.log('第【'+$.index+'】个账号领取奖励失败，'+_0x621739.error_msg);
				}
			}catch(_0x812a12){
				$.logErr(_0x812a12,_0x36abd8);
			}
			finally{
				_0x14eadd();
			}
		},_0x14a3a8);
	});
}
async function _0x2f6568(_0x476983,_0x20c732,_0x3fd776,_0x561989=3*1000){
	return new Promise(_0x197027=>{
		let _0x554a2f={'url':'http://73e3d59151a.kuaishou360360.xyz/akama','headers':{'token':''+$.token},'body':'body='+_0x476983+',client_salt='+_0x20c732+',url='+_0x3fd776};
		$.post(_0x554a2f,async(_0x49abf5,_0x18b2ea,_0x39e921)=>{
			try{
				if(_0x18b2ea&&(_0x18b2ea.statusCode==200)){
					if(_0x39e921.indexOf('sig')>-1){
						_0x39e921=_0x39e921.replace(/\"/g,'');
						_0x39e921=_0x39e921.replace(/,/g,'&');
						let _0x3c07e8=null;
						_0x3c07e8=querystring.parse(_0x39e921);
						$.sig=_0x3c07e8.sig;
						$.sig3=_0x3c07e8.__NS_sig3;
						$.tokensig=_0x3c07e8.__nstokensig;
						$.signum=_0x3c07e8.token_result;
						console.log('账号  '+$.index+'  ['+$.nickname+']当前Api剩余请求次数：'+$.signum);
					}else if(_0x39e921.indexOf('你没有Token')>-1){
						console.log('账号  '+$.index+'  ['+$.nickname+']你没有token！！！！');
						process.exit(0);
					}else if(_0x39e921=='请求次数0'){
						console.log('账号  '+$.index+'  ['+$.nickname+']你的请求次数为0');
						process.exit(0);
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']'+_0x39e921);
					}
				}else{}
			}catch(_0x52c156){
				$.logErr(_0x52c156,_0x18b2ea);
			}
			finally{
				_0x197027();
			}
		},_0x561989);
	});
}
async function _0x5f0ac9(_0x179278,_0x20c732,_0x5b2c8b,_0x11e4d7=3*1000){
	return new Promise(_0x5b3609=>{
		let _0x2179df={'url':'http://73e3d59151a.kuaishou360360.xyz/akama','headers':{'token':''+$.token},'body':'body='+_0x179278+',client_salt='+_0x20c732+',url='+_0x5b2c8b};
		$.post(_0x2179df,async(_0x52d9b9,_0x3c19bb,_0x12b99d)=>{
			try{
				if(_0x3c19bb&&(_0x3c19bb.statusCode==200)){
					if(_0x12b99d.indexOf('sig')>-1){
						_0x12b99d=_0x12b99d.replace(/\"/g,'');
						_0x12b99d=_0x12b99d.replace(/,/g,'&');
						let _0x5c77be=null;
						_0x5c77be=querystring.parse(_0x12b99d);
						$.sig=_0x5c77be.sig;
						$.sig3=_0x5c77be.__NS_sig3;
						$.tokensig=_0x5c77be.__nstokensig;
						$.signum=_0x5c77be.token_result;
						console.log('账号  '+$.index+'  ['+$.nickname+']当前Api剩余请求次数：'+$.signum);
					}else if(_0x12b99d.indexOf('你没有Token')>-1){
						console.log('账号  '+$.index+'  ['+$.nickname+']你没有token！！！！');
						process.exit(0);
					}else if(_0x12b99d=='请求次数0'){
						console.log('账号  '+$.index+'  ['+$.nickname+']你的请求次数为0');
						process.exit(0);
					}else{
						console.log('账号  '+$.index+'  ['+$.nickname+']'+_0x12b99d);
					}
				}else{}
			}catch(_0x3b2185){
				$.logErr(_0x3b2185,_0x3c19bb);
			}
			finally{
				_0x5b3609();
			}
		},_0x11e4d7);
	});
}
async function _0x2081c1(_0x3d6ce2=3*1000){
	return new Promise(_0x13313c=>{
		let _0x4c7a0a={'url':'https://nebula.kuaishou.com/rest/n/nebula/cashSign/goldenAreaTaskSignIn','headers':{'Accept-Encoding':'gzip, deflate','Cookie':$.cookie,'Connection':'keep-alive','Accept':'*/*','Host':'nebula.kuaishou.com','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.get(_0x4c7a0a,async(_0xaa36b6,_0x4ac4ad,_0xca3295)=>{
			try{
				_0xca3295=JSON.parse(_0xca3295);
				console.log(_0xca3295);
				if(_0xca3295.result==1){}else{
					console.log('第【'+$.index+'】个账号获取签到信息失败，'+_0xca3295.error_msg);
				}
			}catch(_0x2e4bd7){
				$.logErr(_0x2e4bd7,_0x4ac4ad);
			}
			finally{
				_0x13313c();
			}
		},_0x3d6ce2);
	});
}
async function _0x3b4e98(_0x4167df=3*1000){
	return new Promise(_0x32bf37=>{
		let _0x1a0cf8={'url':'https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA','body':''+$.enc,'headers':{'Accept-Encoding':'gzip, deflate','Connection':'keep-alive','Accept':'*/*','Accept-Language':'en-us','User-Agent':'Kwai-android aegon/3.4.0'}};
		$.post(_0x1a0cf8,async(_0xb00ba,_0x49431b,_0x5fab7c)=>{
			try{
				_0x5fab7c=JSON.parse(_0x5fab7c);
				if((_0x5fab7c.result==1)&&_0x5fab7c.llsid){
					$.lid=_0x5fab7c.llsid;
					let _0x2a90b8=_0x37017e(5,8);
				}else{
					$.lid='0';
				}
				$.lid='200'+_0x37017e(1000553820678945,8999953820679999);
				let _0x2ea054=_0x37017e(3,5);
				await $.wait(_0x2ea054*1000);
			}catch(_0x10d792){
				$.logErr(_0x10d792,_0x49431b);
			}
			finally{
				_0x32bf37();
			}
		},_0x4167df);
	});
}
async function _0x27ebf1(_0x5a4ea4){
	if(!_0x5a4ea4)return;
	if(Notify>0){
		if($.isNode()){
			var _0x539f0f=require('./sendNotify');
			await _0x539f0f.sendNotify($.name,_0x5a4ea4);
		}else{
			$.msg(_0x5a4ea4);
		}
	}else{
		console.log(_0x5a4ea4);
	}
}
function _0x132e30(_0x32ea4c){
	_0x32ea4c=(_0x32ea4c||16);
	var _0x416e65='abcdef1234567890',_0xe9d76f=_0x416e65.length,_0x7ef0ee='';
	for(i=0;i<_0x32ea4c;i++)_0x7ef0ee+=_0x416e65.charAt(Math.floor(Math.random()*_0xe9d76f));
	return _0x7ef0ee;
}
function _0x37017e(_0x28340a,_0x7cdd1){
	return Math.round(Math.random()*_0x7cdd1-_0x28340a+_0x28340a);
}
async function _0x1c5cd5(_0x5d6f28){
	let _0x47aec1=Buffer.from(_0x5d6f28,'base64').toString();
	return _0x47aec1;
};
function Env(t,e){
	"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);
	class s{
		constructor(t){
			this.env=t
		}send(t,e="GET"){
			t="string"==typeof t?{url:t}:t;
			let s=this.get;
			return "POST"===e&&(s=this.post),new Promise((e,i)=>{
				s.call(this,t,(t,s,r)=>{t?i(t):e(s)})
			})
		}get(t){
			return this.send.call(this.env,t)
		}post(t){
			return this.send.call(this.env,t,"POST")
		}
	}return new class{
		constructor(t,e){
			this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)
		}isNode(){
			return "undefined"!=typeof module&&!!module.exports
		}isQuanX(){
			return "undefined"!=typeof $task
		}isSurge(){
			return "undefined"!=typeof $httpClient&&"undefined"==typeof $loon
		}isLoon(){
			return "undefined"!=typeof $loon
		}toObj(t,e=null){
			try{
				return JSON.parse(t)
			}catch{
				return e
			}
		}toStr(t,e=null){
			try{
				return JSON.stringify(t)
			}catch{
				return e
			}
		}getjson(t,e){
			let s=e;
			const i=this.getdata(t);
			if(i)try{
				s=JSON.parse(this.getdata(t))
			}catch{}return s
		}setjson(t,e){
			try{
				return this.setdata(JSON.stringify(t),e)
			}catch{
				return!1
			}
		}getScript(t){
			return new Promise(e=>{
				this.get({url:t},(t,s,i)=>e(i))
			})
		}runScript(t,e){
			return new Promise(s=>{
				let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i=i?i.replace(/\n/g,"").trim():i;
				let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r=r?1*r:20,r=e&&e.timeout?e.timeout:r;
				const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};
				this.post(n,(t,e,i)=>s(i))
			}).catch(t=>this.logErr(t))
		}loaddata(){
			if(!this.isNode())return{};
			{
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);
				if(!s&&!i)return{};
				{
					const i=s?t:e;
					try{
						return JSON.parse(this.fs.readFileSync(i))
					}catch(t){
						return{}
					}
				}
			}
		}writedata(){
			if(this.isNode()){
				this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");
				const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);
				s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)
			}
		}lodash_get(t,e,s){
			const i=e.replace(/\[(\d+)\]/g,".$1").split(".");
			let r=t;
			for(const t of i)if(r=Object(r)[t],void 0===r)return s;
			return r
		}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){
			let e=this.getval(t);
			if(/^@/.test(t)){
				const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";
				if(r)try{
					const t=JSON.parse(r);
					e=t?this.lodash_get(t,i,""):e
				}catch(t){
					e=""
				}
			}return e
		}setdata(t,e){
			let s=!1;
			if(/^@/.test(e)){
				const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";
				try{
					const e=JSON.parse(h);
					this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)
				}catch(e){
					const o={};
					this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)
				}
			}else s=this.setval(t,e);
			return s
		}getval(t){
			return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null
		}setval(t,e){
			return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null
		}initGotEnv(t){
			this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))
		}get(t,e=(()=>{})){
			t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{
				try{
					if(t.headers["set-cookie"]){
						const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar
					}
				}catch(t){
					this.logErr(t)
				}
			}).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>{
				const{message:s,response:i}=t;
				e(s,i,i&&i.body)
			}))
		}post(t,e=(()=>{})){
			if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{
				!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)
			});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{
				const{statusCode:s,statusCode:i,headers:r,body:o}=t;
				e(null,{status:s,statusCode:i,headers:r,body:o},o)
			},t=>e(t));else if(this.isNode()){
				this.initGotEnv(t);
				const{
					url:s,...i
				}=t;
				this.got.post(s,i).then(t=>{
					const{statusCode:s,statusCode:i,headers:r,body:o}=t;
					e(null,{status:s,statusCode:i,headers:r,body:o},o)
				},t=>{
					const{message:s,response:i}=t;
					e(s,i,i&&i.body)
				})
			}
		}time(t,e=null){
			const s=e?new Date(e):new Date;
			let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};
			/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));
			for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));
			return t
		}msg(e=t,s="",i="",r){
			const o=t=>{
				if(!t)return t;
				if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}
				:this.isSurge()?{url:t}:void 0;
				if("object"==typeof t){
					if(this.isLoon()){
						let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];
						return{openUrl:e,mediaUrl:s}
					}
					if(this.isQuanX()){
						let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;
						return{"open-url":e,"media-url":s}
					}if(this.isSurge()){
						let e=t.url||t.openUrl||t["open-url"];
						return{url:e}
					}
				}
			};
			if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){
				let t=["","==============📣系统通知📣=============="];
				t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)
			}
		}log(...t){
			t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))
		}logErr(t,e){
			const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();
			s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)
		}wait(t){
			return new Promise(e=>setTimeout(e,t))
		}done(t={}){
			const e=(new Date).getTime(),s=(e-this.startTime)/1e3;
			this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)
		}
	}(t,e)
};
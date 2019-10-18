import { UrlLinkPayload } from 'wechaty-puppet'
import { PadproAppMessagePayload, WechatAppMessageType, PadproLocationMessagePayload } from '../schemas'

export const generateLocationMessage = (payload: PadproLocationMessagePayload): string => {
  return `<location x="${payload.x || ''}"` +
                  ` y="${payload.y || ''}"` +
                  ` scale="${payload.scale || ''}"` +
                  ` label="${payload.label || ''}"` +
                  ` maptype="${payload.mapType || ''}"` +
                  ` poiname="${payload.poiName || ''}"` +
                  ` poiid="${payload.poiId || ''}"` +
                  ` fromusername="${payload.fromUsername || ''}" />`
}

export const generateAppXMLMessage = ({ title, description, url, thumbnailUrl }: UrlLinkPayload): string => {
  return '' +
    '<appmsg appid="" sdkver="0">' +
      `<title>${title}</title>` +
      `<des>${description}</des>` +
      `<type>${WechatAppMessageType.Url}</type>` +
      `<username></username>` +
      `<action>view</action>` +
      `<type>5</type>` +
      `<showtype>0</showtype>` +
      `<url>${url.replace(/&/g, '&amp;')}</url>` +
      `<contentattr>0</contentattr>` +
      `${thumbnailUrl ? '<thumburl>' + thumbnailUrl.replace(/&/g, '&amp;') + '</thumburl>' : ''}` +
    `</appmsg>`
}


export const generateAttachmentXMLMessageFromRaw = (payload: PadproAppMessagePayload): string => {
  return `
	<appmsg appid="${payload.$appid}" sdkver="0">
		<title>${payload.title}</title>
		<des></des>
		<username />
		<action>view</action>
		<type>${payload.type}</type>
		<showtype>0</showtype>
		<content />
		<url />
		<lowurl />
		<dataurl />
		<lowdataurl />
		<contentattr>0</contentattr>
		<streamvideo>
			<streamvideourl />
			<streamvideototaltime>0</streamvideototaltime>
			<streamvideotitle />
			<streamvideowording />
			<streamvideoweburl />
			<streamvideothumburl />
			<streamvideoaduxinfo />
			<streamvideopublishid />
		</streamvideo>
		<canvasPageItem>
			<canvasPageXml><![CDATA[]]></canvasPageXml>
		</canvasPageItem>
		<appattach>
			<attachid>${payload.appattach && payload.appattach.attachid}</attachid>
			<cdnattachurl>${payload.appattach && payload.appattach.cdnattachurl}</cdnattachurl>
			<cdnthumburl>${payload.appattach && payload.appattach.cdnthumburl}</cdnthumburl>
			<cdnthumblength>${payload.appattach && payload.appattach.cdnthumblength}</cdnthumblength>
			<cdnthumbwidth>${payload.appattach && payload.appattach.cdnthumbwidth}</cdnthumbwidth>
			<cdnthumbheight>${payload.appattach && payload.appattach.cdnthumbheight}</cdnthumbheight>
			<cdnthumbaeskey>${payload.appattach && payload.appattach.cdnthumbaeskey}</cdnthumbaeskey>
			<totallen>${payload.appattach && payload.appattach.totallen}</totallen>
			<aeskey>${payload.appattach && payload.appattach.aeskey}</aeskey>
			<encryver>${payload.appattach && payload.appattach.encryver}</encryver>
			<fileext>${payload.appattach && payload.appattach.fileext}</fileext>
			<islargefilemsg>${payload.appattach && payload.appattach.islargefilemsg}</islargefilemsg>
		</appattach>
		<extinfo />
		<thumburl />
		<mediatagname />
		<messageaction><![CDATA[]]></messageaction>
		<messageext><![CDATA[]]></messageext>
		<emoticongift>
			<packageflag>0</packageflag>
			<packageid />
		</emoticongift>
		<emoticonshared>
			<packageflag>0</packageflag>
			<packageid />
		</emoticonshared>
		<designershared>
			<designeruin>0</designeruin>
			<designername>null</designername>
			<designerrediretcturl>null</designerrediretcturl>
		</designershared>
		<emotionpageshared>
			<tid>0</tid>
			<title>null</title>
			<desc>null</desc>
			<iconUrl>null</iconUrl>
			<secondUrl>null</secondUrl>
			<pageType>0</pageType>
		</emotionpageshared>
		<webviewshared>
			<shareUrlOriginal />
			<shareUrlOpen />
			<jsAppId />
			<publisherId />
		</webviewshared>
		<template_id />
		<md5>${payload.md5 || ''}</md5>
		<weappinfo>
			<username><![CDATA[${payload.weappinfo && payload.weappinfo.username}]]</username>
			<appid><![CDATA[${payload.weappinfo && payload.weappinfo.appid}]]</appid>
			<pagepath><![CDATA[${payload.weappinfo && payload.weappinfo.pagepath}]]</pagepath>
			<version>${payload.weappinfo && payload.weappinfo.version}</version>
			<weappiconurl><![CDATA[${payload.weappinfo && payload.weappinfo.weappiconurl}]]</weappiconurl>
			<appservicetype>0</appservicetype>
			<pkginfo>
				<type>${payload.weappinfo && payload.weappinfo.pkginfo && payload.weappinfo.pkginfo.type}</type>
				<md5><![CDATA[${payload.weappinfo && payload.weappinfo.pkginfo && payload.weappinfo.pkginfo.md5}]]></md5>
			</pkginfo>
			<videopageinfo>
				<thumbwidth>0</thumbwidth>
				<thumbheight>0</thumbheight>
				<fromopensdk>0</fromopensdk>
			</videopageinfo>
		</weappinfo>
    <statextstr />
    <recorditem><![CDATA[${payload.recorditem || ''}]]></recorditem>
		<websearch>
			<rec_category>0</rec_category>
			<channelId>0</channelId>
		</websearch>
	</appmsg>
	<fromusername>${payload.fromusername}</fromusername>
	<scene>0</scene>
	<appinfo>
		<version>${payload.appinfo && payload.appinfo.version || '1'}</version>
		<appname>${payload.appinfo && payload.appinfo.appname}</appname>
	</appinfo>
	<commenturl></commenturl>`
}

//maodou
export const generateMiniProgramXMLMessageFromRaw = ({ title, url }: UrlLinkPayload): string => {
	return ` 
	<appmsg appid="" sdkver="0">
		<title>${title}</title>
		<des />
		<action />
		<type>33</type>
		<showtype>0</showtype>
		<soundtype>0</soundtype>
		<mediatagname />
		<messageext />
		<messageaction />
		<content />
		<contentattr>0</contentattr>
		<url>https://mp.weixin.qq.com/mp/waerrpage?appid=wxe638e634ed8b3907&amp;type=upgrade&amp;upgradetype=3#wechat_redirect</url>
		<lowurl />
		<dataurl />
		<lowdataurl />
		<appattach>
			<totallen>0</totallen>
			<attachid />
			<emoticonmd5 />
			<fileext />
			<cdnthumburl>305f0201000458305602010002043591c1e102033d0af802045b30feb602045da92c8e04316175706170706d73675f333236306533353932376434343637325f313537313336383037383036355f31303931343136370204010400030201000400</cdnthumburl>
			<cdnthumbmd5>60bb752bde4b4c598eeb053eadc78ded</cdnthumbmd5>
			<cdnthumblength>38552</cdnthumblength>
			<cdnthumbheight>576</cdnthumbheight>
			<cdnthumbwidth>720</cdnthumbwidth>
			<cdnthumbaeskey>f77df68350feed12309fd95e71556e0c</cdnthumbaeskey>
			<aeskey>f77df68350feed12309fd95e71556e0c</aeskey>
			<encryver>0</encryver>
			<filekey>8397442379@chatroom1617_1562232039</filekey>
		</appattach>
		<extinfo />
		<sourceusername>gh_a1cd71094745@app</sourceusername>
		<sourcedisplayname>毛豆课堂</sourcedisplayname>
		<thumburl />
		<md5 />
		<statextstr />
		<weappinfo>
			<username><![CDATA[gh_a1cd71094745@app]]></username>
			<appid><![CDATA[wxe638e634ed8b3907]]></appid>
			<type>2</type>
			<version>19</version>
			<weappiconurl><![CDATA[http://mmbiz.qpic.cn/mmbiz_png/5lFWgxHFPzeu01RyEibY7vb5iceGcpBu9mReAHiaiaoXF7BicEYNSM2HretSX7DUa9CmASvspmiaSPDhIWm4w7nibXlQw/640?wx_fmt=png&wxfrom=200]]></weappiconurl>
			<pagepath><![CDATA[pages/course/detail/detail.html?id=${url}&userId=5d09f71a42988b00126ff1bc]]></pagepath>
			<shareId><![CDATA[0_wxe638e634ed8b3907_898744801_1562231852_0]]></shareId>
			<appservicetype>0</appservicetype>
		</weappinfo>
	</appmsg>
	<fromusername>akae_teacher_li</fromusername>
	<scene>0</scene>
	<appinfo>
		<version>1</version>
		<appname></appname>
	</appinfo>
	<commenturl></commenturl>`
  }

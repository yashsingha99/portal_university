"use strict";(self.webpackChunkstrapi_backend=self.webpackChunkstrapi_backend||[]).push([[3803],{63803:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var o=_(92132),P=_(91271),n=_(17209),A=_(21272),C=_(55506),R=_(14718),i=_(37754),U=_(55151),v=_(79077),B=_(18920),t=_(15126),l=_(63299),d=_(67014),L=_(59080),I=_(79275),O=_(82437),T=_(61535),a=_(5790),E=_(12083),M=_(35223),K=_(5409),D=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),j=_(77965),N=_(54257),H=_(71210),x=_(51187),F=_(39404),G=_(58692),V=_(501),$=_(57646),c=_(23120),z=_(44414),e=_(25962),X=_(14664),Q=_(42588),Y=_(90325),Z=_(62785),J=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),O_=_(49782),a_=_(67031);const m=()=>((0,n.u)(),(0,o.jsx)(P.HomePageCE,{}))},17209:(W,s,_)=>{_.d(s,{u:()=>B});var o=_(21272),P=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(18920);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:d,isLoading:L}=(0,R.m)(),I=(0,P.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:a,licenseLimitStatus:E,isHostedOnStrapiCloud:M}=l??{};o.useEffect(()=>{if(d||L)return;const K=!n(a)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),K&&I({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:a}),link:{url:M?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:M})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,L,a,E,T,M,d])}}}]);
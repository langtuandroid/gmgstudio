import{L as P,_ as I,C as b,r as v,E as O,g as C,i as k,a as z,v as G,c as T,F as U,b as j,d as _,e as B,f as K}from"./fb2-F9WKo3ZX.js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g="analytics",W="firebase_id",Y="origin",q=60*1e3,N="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",w="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new P("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},f=new O("analytics","Analytics",H);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){if(!e.startsWith(w)){const t=f.create("invalid-gtag-resource",{gtagURL:e});return d.warn(t.message),""}return e}function x(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function J(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Q(e,t){const n=J("firebase-js-sdk-policy",{createScriptURL:V}),s=document.createElement("script"),i=`${w}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function X(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Z(e,t,n,s,i,a){const r=s[i];try{if(r)await t[r];else{const c=(await x(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){d.error(o)}e("config",i,a)}async function ee(e,t,n,s,i){try{let a=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await x(n);for(const c of r){const l=o.find(u=>u.measurementId===c),p=l&&t[l.appId];if(p)a.push(p);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",s,i||{})}catch(a){d.error(a)}}function te(e,t,n,s){async function i(a,...r){try{if(a==="event"){const[o,c]=r;await ee(e,t,n,o,c)}else if(a==="config"){const[o,c]=r;await Z(e,t,n,s,o,c)}else if(a==="consent"){const[o,c]=r;e("consent",o,c)}else if(a==="get"){const[o,c,l]=r;e("get",o,c,l)}else if(a==="set"){const[o]=r;e("set",o)}else e(a,...r)}catch(o){d.error(o)}}return i}function ne(e,t,n,s,i){let a=function(...r){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=te(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function ie(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(w)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=30,se=1e3;class re{constructor(t={},n=se){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const S=new re;function oe(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ce(e){var r;const{appId:t,apiKey:n}=e,s={method:"GET",headers:oe(n)},i=N.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();(r=c.error)!=null&&r.message&&(o=c.error.message)}catch{}throw f.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function le(e,t=S,n){const{appId:s,apiKey:i,measurementId:a}=e.options;if(!s)throw f.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:s};throw f.create("no-api-key")}const r=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ue;return setTimeout(async()=>{o.abort()},q),L({appId:s,apiKey:i,measurementId:a},r,o,t)}async function L(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=S){var o;const{appId:a,measurementId:r}=e;try{await de(s,t)}catch(c){if(r)return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:r};throw c}try{const c=await ce(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!fe(l)){if(i.deleteThrottleMetadata(a),r)return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:r};throw c}const p=Number((o=l==null?void 0:l.customData)==null?void 0:o.httpStatus)===503?T(n,i.intervalMillis,ae):T(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(a,u),d.debug(`Calling attemptFetch again in ${p} millis`),L(e,u,s,i)}}function de(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),s(f.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fe(e){if(!(e instanceof U)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ue{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function pe(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const a=await t,r={...s,send_to:a};e("event",n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(){if(z())try{await G()}catch(e){return d.warn(f.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return d.warn(f.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function me(e,t,n,s,i,a,r){const o=le(e);o.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&d.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>d.error(h)),t.push(o);const c=he().then(h=>{if(h)return s.getId()}),[l,p]=await Promise.all([o,c]);ie(a)||Q(a,l.measurementId),i("js",new Date);const u=(r==null?void 0:r.config)??{};return u[Y]="firebase",u.update=!0,p!=null&&(u[W]=p),i("config",l.measurementId,u),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.app=t}_delete(){return delete m[this.app.options.appId],Promise.resolve()}}let m={},A=[];const E={};let y="dataLayer",ye="gtag",M,$,R=!1;function we(){const e=[];if(k()&&e.push("This is a browser extension environment."),K()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=f.create("invalid-analytics-context",{errorInfo:t});d.warn(n.message)}}function Ie(e,t,n){we();const s=e.options.appId;if(!s)throw f.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw f.create("no-api-key");if(m[s]!=null)throw f.create("already-exists",{id:s});if(!R){X(y);const{wrappedGtag:a,gtagCore:r}=ne(m,A,E,y,ye);$=a,M=r,R=!0}return m[s]=me(e,A,E,t,M,y,n),new ge(e)}function Ee(e=j()){e=C(e);const t=_(e,g);return t.isInitialized()?t.getImmediate():be(e)}function be(e,t={}){const n=_(e,g);if(n.isInitialized()){const i=n.getImmediate();if(B(t,n.getOptions()))return i;throw f.create("already-initialized")}return n.initialize({options:t})}function ve(e,t,n,s){e=C(e),pe($,m[e.app.options.appId],t,n,s).catch(i=>d.error(i))}const D="@firebase/analytics",F="0.10.18";function Te(){I(new b(g,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ie(s,i,n)},"PUBLIC")),I(new b("analytics-internal",e,"PRIVATE")),v(D,F),v(D,F,"esm2020");function e(t){try{const n=t.getProvider(g).getImmediate();return{logEvent:(s,i,a)=>ve(n,s,i,a)}}catch(n){throw f.create("interop-component-reg-failed",{reason:n})}}}Te();export{Ee as g};

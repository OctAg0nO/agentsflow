(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{2120:function(e,n,t){Promise.resolve().then(t.bind(t,7381))},7381:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Page}});var r=t(7437),s=t(2265);function Page(){let e=(0,s.useRef)(null);(0,s.useEffect)(()=>(e.current=new WebSocket("ws://localhost:8999/ws"),e.current.onopen=()=>{console.log("ws opened")},e.current.onclose=()=>{console.log("ws closed")},e.current.onmessage=e=>{console.log("Agent: "+JSON.parse(e.data).message)},()=>{e.current.close()}),[]);let startAgent=()=>{e.current.send(JSON.stringify({action:"start_agent",agent_name:"assistant",message:"What are you and what is your purpose?"}))},runAgent=()=>{e.current.send(JSON.stringify({action:"run_agent",agent_name:"assistant",message:"Build a simple calculator with ui"}))};return(0,r.jsxs)("div",{className:"space-x-4",children:[(0,r.jsx)("button",{onClick:()=>{startAgent()},children:"Start"}),(0,r.jsx)("button",{onClick:()=>{runAgent()},children:"Run"})]})}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),s=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,c={},l=null,i=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)o.call(n,r)&&!u.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:i,props:c,_owner:a.current}}n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=2120)}),_N_E=e.O()}]);
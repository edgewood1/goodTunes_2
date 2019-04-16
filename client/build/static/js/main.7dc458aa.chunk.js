(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,n,t){e.exports=t(67)},61:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),s=t.n(o),i=t(5),u=t(6),l=t(8),c=t(7),p=t(9),d=t(1),g=t(2);function f(){var e=Object(d.a)(["\n  order: 2;\n  width: 40%;\n  margin: 5% 2% 5% 0;\n  border-radius: 5%;\n  overflow: scroll;\n  border: 1px solid yellow;\n  background-color: #29648a;\n  @media only screen and (max-width: 400px) {\n    order: 2;\n    width: 100%;\n    // margin: 0;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(d.a)(["\n  order: 1;\n  margin: 5% 0 5% 2%;\n  border-radius: 5%;\n  border: 1px solid yellow;\n  width: 40%;\n  background-color: #29648a;\n  @media only screen and (max-width: 400px) {\n    margin: 0;\n    order: 1;\n    width: 100%;\n  }\n"]);return h=function(){return e},e}function m(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: 65vh;\n\n  @media only screen and (max-width: 400px) {\n    flex-direction: column;\n    justify-content: space-evenly;\n    overflow: none;\n  }\n"]);return m=function(){return e},e}var v=g.a.div(m()),b=g.a.div(h()),y=g.a.div(f()),w=t(3),S=t.n(w),j={scrape:function(){return S.a.get("/scrape")},isLogged:function(){return S.a.get("/isLogged")},register:function(e){return S.a.post("/register",e)},login:function(e){return S.a.post("/login",e)},logout:function(e){return S.a.get("/logout")},authGoogle:function(){return console.log("hit2"),S.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",S.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",S.a.get("/auth/google")},playTunes:function(e){return S.a.get("/spotify2/"+e.title+"/"+e.artist)},addScrape:function(e){return S.a.post("/addScrape",e)},getPlaylist:function(){return S.a.get("/getPlaylist")},saveTune:function(e){return console.log(e),S.a.post("/add",e)},getSavedTunes:function(e){return console.log(e),S.a.get("/savedTunes/"+e)},deleteTunes:function(e){return console.log("to delete ",e),S.a.post("/deleteTunes",e)},updateTunes:function(e){return S.a.put("/removeUser",e)},saveRatings:function(e){return S.a.post("/saveRatings",e)}},T=t(28),O=t.n(T);t(61);function E(){var e=Object(d.a)(["\n  font-size: 1.25em;\n  padding: 4%;\n  font-weight: bold;\n"]);return E=function(){return e},e}function x(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 4%;\n  // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n"]);return x=function(){return e},e}function k(){var e=Object(d.a)(["\n  font-size: 1.5em;\n  padding: 2%;\n  color: white;\n  text-shadow:\n\t\t-1px -1px 0 #000,\n\t\t1px -1px 0 #000,\n\t\t-1px 1px 0 #000,\n\t\t1px 1px 0 #000;\n}\n"]);return k=function(){return e},e}function D(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 35%\n  align-content: center;\n"]);return D=function(){return e},e}function C(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 65%;\n  // flex-grow: 2;\n"]);return C=function(){return e},e}function L(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  border: 2.5px solid #f5d21f;\n  border-radius: 5%;\n  margin: 4%;\n  padding: 3%;\n  overflow: scroll;\n  background-color: #2e9cca;\n"]);return L=function(){return e},e}function I(){var e=Object(d.a)(['\n  width: "50vw";\n  order: "2";\n  border: 1.5px ridge #f5d21f;\n  border-right: none;\n']);return I=function(){return e},e}var P=g.a.div(I()),R=g.a.div(L()),A=g.a.div(C()),M=g.a.div(D()),_=g.a.div(k()),z=g.a.div(x()),F=g.a.div(E()),U=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={tunes:[]},t.getPlaylist=function(){j.getPlaylist().then(function(e){e.data&&(t.props.changeState({allTunes:e.data}),t.setState({tunes:e.data}))}).catch(function(e){console.log(e),t.getPlaylist()})},t.random=function(){return Math.floor(1e5*Math.random())},t.saveTunes=function(e){t.props.appData.login&&t.props.appData.id&&(e.id=t.props.appData.id,j.saveTune(e).then(function(e){if("already saved"==e.data)t.props.changeState({message:e.data}),setTimeout(function(){t.props.changeState({message:"keep browsing..."})},1e3);else if(e.data.tune){var n=t.props.appData.userTunes;n.push(e.data.tune),t.props.changeState({message:e.data.message,userTunes:n}),setTimeout(function(){t.props.changeState({message:"keep browsing..."})},1e3)}else t.props.changeState({message:"you'll need to login and try again",logInShow:1})}))},t.deleteTunes=function(e){e.idToRemove=t.props.appData.id;var n=e._id;j.deleteTunes(e).then(function(e){var a=t.props.appData.userTunes.filter(function(e){return e._id!==n});t.props.changeState({message:e.data.message,userTunes:a})})},t.updateTunes=function(e){j.updateTunes(e).then(function(e){t.props.changeState({message:e.data.message})})},t.playTunes=function(e){j.playTunes(e).then(function(e){t.props.changeState({playerID:e.data,message:"Press play!",play:1}),"#"===e.data&&t.props.changeState({message:"Track not available for play - try another!",play:0})}).catch(function(e){return t.props.changeState({message:"Track not available for play - try another!",play:0}),e})},t.boundClick4=function(e,n){!0!==t.props.appData.login?t.props.changeState({logInShow:1,message:"Please, log-in first!"}):t.getStuff(e,n)},t.getStuff=function(e,n){if(n.usersRated.includes(t.props.appData.id))t.props.changeState({message:"You've already rated this track"});else{var a=n.average*n.votes;a+=e,n.votes=n.votes+1,n.average=a/n.votes,n.usersRated.push(t.props.appData.id),t.saveRatings(n._id,n.usersRated,n.average,n.votes)}},t.saveRatings=function(e,n,a,r){var o={songId:e,usersRated:n,songAvg:a,songVotes:r};j.saveRatings(o).then(function(e){t.props.changeState({message:"Thanks for the rating!"})})},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.appData.allTunesShow,this.getPlaylist()}},{key:"render",value:function(){var e=this;return r.a.createElement(P,null,this.state.tunes.map(function(n){return r.a.createElement(R,{key:e.random()},r.a.createElement(A,null,r.a.createElement(_,null,n.artist),r.a.createElement(F,null," ",n.title," "),r.a.createElement(z,null,r.a.createElement(O.a,{key:n.id,start:0,step:1,stop:5,usersRated:n.usersRated,average:n.average,votes:n.votes,emptySymbol:"glyphicon glyphicon-star-empty",initialRating:n.average,fullSymbol:"glyphicon glyphicon-star",onClick:function(t){return e.boundClick4(t,n)}})),r.a.createElement("p",{style:{padding:"4%",color:"white",fontSize:"1.1em"}},"Votes: ",n.votes)),r.a.createElement(M,null,r.a.createElement("img",{alt:"meaningful",src:n.source}),r.a.createElement("button",{onClick:function(){return e.playTunes(n)},style:{margin:"3%",backgroundColor:"#f5d21f",width:"75%",justifyContent:"center",marginLeft:"15%"}},"Play"),e.props.appData.allTunesShow?r.a.createElement("button",{onClick:function(){return e.saveTunes(n)},style:{margin:"3%",backgroundColor:"#44db0d",width:"75%",justifyContent:"center",marginLeft:"15%"}},"Save"):r.a.createElement("button",{onClick:function(){return e.deleteTunes(n)},style:{margin:"3%",backgroundColor:"#44db0d",width:"75%",justifyContent:"center",marginLeft:"15%"}}," ","Delete"," ")))}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.appData.allTunesShow?{tunes:e.appData.allTunes}:{tunes:e.appData.userTunes}}}]),n}(r.a.Component),Y=t(29),G=t(33);function J(){var e=Object(d.a)(["\n  flex-direction: column;\n  justify-content: center;\n  margin: 4%;\n  padding: 3%;\n  color: white;\n"]);return J=function(){return e},e}function V(){var e=Object(d.a)(["\n  width: 50vw;\n  order: 2;\n"]);return V=function(){return e},e}var B=g.a.div(V()),N=g.a.div(J()),W=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={username:"",password:""},t.handleInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(Y.a)({},a,r))},t.handleLogin=function(e){e.preventDefault(),t.setState({username:"",password:""});var n={username:t.state.username,password:t.state.password};"Login"===e.target.value?j.login(n).then(function(e){e.data._id?t.getTunes(e.data._id):t.props.changeState({message:e.data.message,login:!1})}):j.register(n).then(function(e){t.props.changeState({message:e.data.message,id:e.data._id,login:!0,db:!1})})},t.googleLogin=function(e){e.preventDefault(),console.log("hit"),S.a.get("/auth/google",{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){console.log(e)})},t.getTunes=function(e){j.getSavedTunes(e).then(function(n){var a;a=n.data.message?n.data.message:"You have "+n.data.length+" saved tunes.",t.props.changeState({message:a,login:!0,id:e,logInShow:0,allTunesShow:0,userTunes:n.data})})},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement("form",null,r.a.createElement(N,null,r.a.createElement("label",{htmlFor:"username"},"Username: "),r.a.createElement("input",{type:"text",id:"username",name:"username",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(N,null,r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{type:"text",id:"password",name:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(N,null,r.a.createElement("button",{value:"Login",onClick:this.handleLogin,style:{color:"black",marginRight:"5%",background:"#f5d21f"}},"Login"),r.a.createElement("button",{value:"Register",onClick:this.handleLogin,style:{color:"black",marginLeft:"5%",background:"#f5d21f"}},"Register")),r.a.createElement(N,null,r.a.createElement(G.a,null))))}}]),n}(r.a.Component),q=t(32),H=t.n(q);function K(){var e=Object(d.a)(["\n  order: 2;\n\n  flex-grow: 6;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 5%;\n\n  margin: auto;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  order: 1;\n  flex-grow: 0.5;\n  display: flex;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 10%;\n  margin: 2%;\n  background-color: #fcfcfc;\n"]);return Q=function(){return e},e}function X(){var e=Object(d.a)(["\n  font-size: 1.5em;\n  padding: 2%;\n  background-color: #fcfcfc;\n"]);return X=function(){return e},e}function Z(){var e=Object(d.a)(["\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n\n  overflow: hidden;\n"]);return Z=function(){return e},e}var $=g.a.div(Z()),ee=g.a.div(X()),ne=g.a.div(Q()),te=g.a.div(K()),ae=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(ne,null,r.a.createElement(ee,null,this.props.message)),r.a.createElement(te,null,this.props.play?r.a.createElement(H.a,{url:"https://open.spotify.com/embed?uri=spotify:track:"+this.props.playerID,width:"100%",height:"20%",position:"relative"}):r.a.createElement("p",null)))}}]),n}(r.a.Component),re=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.appData,n=e.play,t=e.playerID,a=e.message,o=e.logInShow;return r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(ae,{play:n,playerID:t,message:a})),r.a.createElement(y,null,o?r.a.createElement(W,{changeState:this.props.changeState,appState:this.props.appData}):r.a.createElement(U,{changeState:this.props.changeState,appData:this.props.appData})))}}]),n}(r.a.Component);function oe(){var e=Object(d.a)(["\n  padding: 1%;\n  border-radius: 10%;\n  background-color: #2e9cca;\n  text-align: center;\n"]);return oe=function(){return e},e}function se(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  // flex-wrap: wrap;\n\n  margin: 0 5% 2% 5%;\n"]);return se=function(){return e},e}function ie(){var e=Object(d.a)(["\n  padding: 3%;\n\n  border-radius: 4%;\n"]);return ie=function(){return e},e}function ue(){var e=Object(d.a)(['\n  margin: 3% 5% 0 5%;\n  border-radius: 2.5%;\n  border: 2px ridge #f5d21f;\n  width: 85%;\n  background-color: #29648a;\n  color: white;\n  font-family: "Lato", sans-serif;\n']);return ue=function(){return e},e}function le(){var e=Object(d.a)(["\ndisplay: flex\njustify-content: center;\n\n\n"]);return le=function(){return e},e}var ce=g.a.div(le()),pe=g.a.div(ue()),de=g.a.div(ie()),ge=g.a.div(se()),fe=g.a.div(oe()),he=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).scrape=function(){t.props.changeState({message:"Scraping... "}),j.scrape().then(function(e){t.addScrapeToDb(e.data)}).catch(function(e){return console.log(e)})},t.addScrapeToDb=function(e){j.addScrape(e).then(function(e){var n=e.data.tunes.length;j.getPlaylist().then(function(e){t.props.changeState({message:"You've added "+n+" new Tunes",allTunes:e.data})})})},t.getPlaylist=function(){var e=t.props.appData.allTunes.length;j.getPlaylist().then(function(n){var a=n.data.length,r=Math.abs(e-a);n.data&&(t.props.changeState({allTunes:n.data,message:"There were "+r+" tunes to scrape"}),t.setState({tunes:n.data}))}).catch(function(e){console.log(e),t.getPlaylist()})},t.getUserTunes=function(){t.props.appData.login?t.props.changeState({allTunesShow:0},function(){t.newMessage()}):t.props.changeState({message:"log in!",login:!1,logInShow:1})},t.newMessage=function(){t.props.changeState({message:"You have "+t.props.appData.userTunes.length+" saved tunes."})},t.getAllTunes=function(){t.props.changeState({logInShow:0,allTunesShow:1,message:"All available Tunes"})},t.handleLogOut=function(){t.props.appData.login?j.logout().then(function(e){t.props.changeState({message:e.data.message,allTunesShow:1,login:!1,id:0})}):t.props.changeState({message:"already logged out!!"})},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(ce,null,r.a.createElement(pe,null,r.a.createElement(de,null,r.a.createElement("h1",{style:{fontSize:"275%"}},"Good Tunes"),r.a.createElement("h2",null," recommended tunes from the internet ")),r.a.createElement(ge,null,r.a.createElement(fe,{onClick:function(){return e.scrape(e.props)}},"Scrape New Tunes"),r.a.createElement(fe,{onClick:function(){return e.getAllTunes(e.props)}},"See Db Tunes"),r.a.createElement(fe,{onClick:function(){return e.getUserTunes(e.props)}},"Saved PlayList"),r.a.createElement(fe,{onClick:this.handleLogOut},"LogOut"))))}}]),n}(a.Component);function me(){var e=Object(d.a)(["\n  padding: 3vh;\n  @media only screen and (max-width: 800px) {\n    padding: 5vh;\n  }\n"]);return me=function(){return e},e}var ve=g.a.div(me()),be=function(){return r.a.createElement(ve,null)};function ye(){var e=Object(d.a)(["\n  min-height: 100%;\n  border: 3px solid yellow;\n  width: 100%;\n  background: #464866;\n  // background: linear-gradient(\n  //   to bottom,\n  //   #6db3f2 0%,\n  //   #54a3ee 50%,\n  //   #3690f0 51%,\n  //   #1e69de 100%\n  // ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n"]);return ye=function(){return e},e}function we(){var e=Object(d.a)([""]);return we=function(){return e},e}var Se=g.a.div(we()),je=g.a.div(ye()),Te=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={allTunesShow:1,logInShow:0,added:0,play:0,login:!1,id:0,message:"Logged Out",allTunes:[],userTunes:[],playerID:0},t.changeState=function(e){t.setState(e,function(){return console.log(t.state)})},t.getTunes=function(){j.getSavedTunes(t.state.id).then(function(e){var n=e.data.filter(function(e,n){return!t.state.savedTunes.includes(e)});t.setState({savedTunes:n})})},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(je,null,r.a.createElement(he,{appData:this.state,changeState:this.changeState}),r.a.createElement(Se,null,r.a.createElement(re,{appData:this.state,changeState:this.changeState})),r.a.createElement(be,null))}}]),n}(r.a.Component);s.a.render(r.a.createElement(Te,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7dc458aa.chunk.js.map
(this["webpackJsonpmodulo-3-evaluacion-final-miriamela"]=this["webpackJsonpmodulo-3-evaluacion-final-miriamela"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),i=(a(28),a(6)),l=a(7),o=a(10),u=a(9),h=a(8),m=(a(29),a(14),a(15),a(30),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleKey=n.handleKey.bind(Object(o.a)(n)),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.inputSearch(t)}},{key:"handleKey",value:function(e){13===e.which&&e.preventDefault()}},{key:"handleClick",value:function(e){this.props.resetSearch()}},{key:"render",value:function(){return r.a.createElement("form",{className:"search"},r.a.createElement("input",{className:"input",type:"text",value:this.props.value,onChange:this.handleChange,onKeyPress:this.handleKey}),r.a.createElement("button",{className:"searchBtn",type:"button",onClick:this.handleClick},"Reset"))}}]),a}(r.a.Component)),p=a(12),d=a(11),f=a.n(d),b=(a(33),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"picture"},r.a.createElement("img",{alt:this.props.character.name,src:this.props.character.image})),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"name"},"+ ".concat(this.props.character.name)),r.a.createElement("span",{className:"status"},"+ ".concat(this.props.character.status)),r.a.createElement(p.b,{to:"/details/"+this.props.character.id},r.a.createElement("button",{className:"moreInfo",type:"button"},"info"))))}}]),a}(r.a.Component));b.propsType={character:f.a.array.isRequired};var E=b,v=(a(37),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(0===this.props.charactersToPaint.length)return r.a.createElement("p",{className:"showResultsNone"},"No hay ningun personaje con este nombre");for(var e=[],t=0;t<this.props.charactersToPaint.length;t++)e.push(r.a.createElement("li",{className:"eachCard",id:this.props.charactersToPaint[t].id,key:this.props.charactersToPaint[t].id},r.a.createElement(E,{character:this.props.charactersToPaint[t]})));return r.a.createElement("section",{className:"showResults"},r.a.createElement("ul",{className:"resultList"},e))}}]),a}(r.a.Component));v.propsTypes={charactersArr:f.a.array.isRequired};var y=v,N=(a(38),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"section"},r.a.createElement("article",{className:"details"},r.a.createElement("div",{className:"picture"},r.a.createElement("img",{className:"img",alt:this.props.name,src:this.props.imageURL})),r.a.createElement("div",{className:"characterInfo"},r.a.createElement("span",{className:"name"},"+",this.props.name," "),r.a.createElement("span",{className:"species"},"+",this.props.species),r.a.createElement("span",{className:"Planet"},"+",this.props.planet),r.a.createElement("span",{className:"episode"},"+Episodes: ",this.props.episode),r.a.createElement("span",{className:"status"},"+",this.props.status),r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"back",type:"button"},"Volver")))))}}]),a}(r.a.Component)),j=a(1),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={inputValue:"",characters:[],characterFiltered:[]},n.searchInput=n.searchInput.bind(Object(o.a)(n)),n.renderingDetail=n.renderingDetail.bind(Object(o.a)(n)),n.resetSearch=n.resetSearch.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({characters:t.results},(function(){return e.filterCharacters()}))}))}},{key:"searchInput",value:function(e){var t=this;this.setState({inputValue:e},(function(){return t.filterCharacters()})),console.log(this.state.inputValue)}},{key:"filterCharacters",value:function(){var e=this,t=this.state.characters.filter((function(t){return t.name.toLowerCase().includes(e.state.inputValue.toLowerCase())}));this.setState({characterFiltered:t})}},{key:"resetSearch",value:function(){window.location.reload()}},{key:"renderingDetail",value:function(e){var t=this.state.characterFiltered.find((function(t){return t.id===parseInt(e)}));return t?r.a.createElement(N,{name:t.name,species:t.species,planet:t.origin.name,episode:t.episode.length+1,status:t.status,imageURL:t.image}):r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"back2",type:"button"},"Volver")),r.a.createElement("p",{class:"message"},"Este personaje no existe"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"title"},"Rick and Morty")),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement("main",{className:"main"},r.a.createElement(m,{inputSearch:this.searchInput,resetSearch:this.resetSearch}),r.a.createElement(y,{charactersToPaint:this.state.characterFiltered}))),r.a.createElement(j.a,{path:"/otraRaiz",render:function(){return r.a.createElement(y,{charactersToPaint:e.state.characterFiltered})}}),r.a.createElement(j.a,{path:"/details/:id",render:function(t){return e.renderingDetail(t.match.params.id)}})))}}]),a}(r.a.Component);s.a.render(r.a.createElement(p.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.981280cf.chunk.js.map
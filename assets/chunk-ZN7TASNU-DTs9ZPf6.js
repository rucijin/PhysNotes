import{k as l,c as f,Z as a,s as c,m as N,X as b,R as P}from"./chunk-5ZJXQJOJ-CiL278DW.js";import{m as d,ad as m,ae as w,af as y}from"./mermaid.esm.min-eyeYfW0C.js";var D="\0",u="\0",E="",p,j=(p=class{constructor(t={}){this._isDirected=Object.prototype.hasOwnProperty.call(t,"directed")?t.directed:!0,this._isMultigraph=Object.prototype.hasOwnProperty.call(t,"multigraph")?t.multigraph:!1,this._isCompound=Object.prototype.hasOwnProperty.call(t,"compound")?t.compound:!1,this._label=void 0,this._defaultNodeLabelFn=m(void 0),this._defaultEdgeLabelFn=m(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[u]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(t){return this._label=t,this}graph(){return this._label}setDefaultNodeLabel(t){return w(t)||(t=m(t)),this._defaultNodeLabelFn=t,this}nodeCount(){return this._nodeCount}nodes(){return l(this._nodes)}sources(){var t=this;return f(this.nodes(),function(e){return y(t._in[e])})}sinks(){var t=this;return f(this.nodes(),function(e){return y(t._out[e])})}setNodes(t,e){var s=arguments,r=this;return a(t,function(i){s.length>1?r.setNode(i,e):r.setNode(i)}),this}setNode(t,e){return Object.prototype.hasOwnProperty.call(this._nodes,t)?(arguments.length>1&&(this._nodes[t]=e),this):(this._nodes[t]=arguments.length>1?e:this._defaultNodeLabelFn(t),this._isCompound&&(this._parent[t]=u,this._children[t]={},this._children[u][t]=!0),this._in[t]={},this._preds[t]={},this._out[t]={},this._sucs[t]={},++this._nodeCount,this)}node(t){return this._nodes[t]}hasNode(t){return Object.prototype.hasOwnProperty.call(this._nodes,t)}removeNode(t){if(Object.prototype.hasOwnProperty.call(this._nodes,t)){var e=d(s=>this.removeEdge(this._edgeObjs[s]),"removeEdge");delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),delete this._parent[t],a(this.children(t),s=>{this.setParent(s)}),delete this._children[t]),a(l(this._in[t]),e),delete this._in[t],delete this._preds[t],a(l(this._out[t]),e),delete this._out[t],delete this._sucs[t],--this._nodeCount}return this}setParent(t,e){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(c(e))e=u;else{e+="";for(var s=e;!c(s);s=this.parent(s))if(s===t)throw new Error("Setting "+e+" as parent of "+t+" would create a cycle");this.setNode(e)}return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=e,this._children[e][t]=!0,this}_removeFromParentsChildList(t){delete this._children[this._parent[t]][t]}parent(t){if(this._isCompound){var e=this._parent[t];if(e!==u)return e}}children(t){if(c(t)&&(t=u),this._isCompound){var e=this._children[t];if(e)return l(e)}else{if(t===u)return this.nodes();if(this.hasNode(t))return[]}}predecessors(t){var e=this._preds[t];if(e)return l(e)}successors(t){var e=this._sucs[t];if(e)return l(e)}neighbors(t){var e=this.predecessors(t);if(e)return N(e,this.successors(t))}isLeaf(t){var e;return this.isDirected()?e=this.successors(t):e=this.neighbors(t),e.length===0}filterNodes(t){var e=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});e.setGraph(this.graph());var s=this;a(this._nodes,function(n,h){t(h)&&e.setNode(h,n)}),a(this._edgeObjs,function(n){e.hasNode(n.v)&&e.hasNode(n.w)&&e.setEdge(n,s.edge(n))});var r={};function i(n){var h=s.parent(n);return h===void 0||e.hasNode(h)?(r[n]=h,h):h in r?r[h]:i(h)}return d(i,"findParent"),this._isCompound&&a(e.nodes(),function(n){e.setParent(n,i(n))}),e}setDefaultEdgeLabel(t){return w(t)||(t=m(t)),this._defaultEdgeLabelFn=t,this}edgeCount(){return this._edgeCount}edges(){return b(this._edgeObjs)}setPath(t,e){var s=this,r=arguments;return P(t,function(i,n){return r.length>1?s.setEdge(i,n,e):s.setEdge(i,n),n}),this}setEdge(){var t,e,s,r,i=!1,n=arguments[0];typeof n=="object"&&n!==null&&"v"in n?(t=n.v,e=n.w,s=n.name,arguments.length===2&&(r=arguments[1],i=!0)):(t=n,e=arguments[1],s=arguments[3],arguments.length>2&&(r=arguments[2],i=!0)),t=""+t,e=""+e,c(s)||(s=""+s);var h=g(this._isDirected,t,e,s);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,h))return i&&(this._edgeLabels[h]=r),this;if(!c(s)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(e),this._edgeLabels[h]=i?r:this._defaultEdgeLabelFn(t,e,s);var _=L(this._isDirected,t,e,s);return t=_.v,e=_.w,Object.freeze(_),this._edgeObjs[h]=_,O(this._preds[e],t),O(this._sucs[t],e),this._in[e][h]=_,this._out[t][h]=_,this._edgeCount++,this}edge(t,e,s){var r=arguments.length===1?v(this._isDirected,arguments[0]):g(this._isDirected,t,e,s);return this._edgeLabels[r]}hasEdge(t,e,s){var r=arguments.length===1?v(this._isDirected,arguments[0]):g(this._isDirected,t,e,s);return Object.prototype.hasOwnProperty.call(this._edgeLabels,r)}removeEdge(t,e,s){var r=arguments.length===1?v(this._isDirected,arguments[0]):g(this._isDirected,t,e,s),i=this._edgeObjs[r];return i&&(t=i.v,e=i.w,delete this._edgeLabels[r],delete this._edgeObjs[r],C(this._preds[e],t),C(this._sucs[t],e),delete this._in[e][r],delete this._out[t][r],this._edgeCount--),this}inEdges(t,e){var s=this._in[t];if(s){var r=b(s);return e?f(r,function(i){return i.v===e}):r}}outEdges(t,e){var s=this._out[t];if(s){var r=b(s);return e?f(r,function(i){return i.w===e}):r}}nodeEdges(t,e){var s=this.inEdges(t,e);if(s)return s.concat(this.outEdges(t,e))}},d(p,"Graph"),p);j.prototype._nodeCount=0;j.prototype._edgeCount=0;function O(o,t){o[t]?o[t]++:o[t]=1}d(O,"incrementOrInitEntry");function C(o,t){--o[t]||delete o[t]}d(C,"decrementOrRemoveEntry");function g(o,t,e,s){var r=""+t,i=""+e;if(!o&&r>i){var n=r;r=i,i=n}return r+E+i+E+(c(s)?D:s)}d(g,"edgeArgsToId");function L(o,t,e,s){var r=""+t,i=""+e;if(!o&&r>i){var n=r;r=i,i=n}var h={v:r,w:i};return s&&(h.name=s),h}d(L,"edgeArgsToObj");function v(o,t){return g(o,t.v,t.w,t.name)}d(v,"edgeObjToId");export{j as m};

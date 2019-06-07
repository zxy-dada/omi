webpackJsonp([55],{89:function(t,e){t.exports="## Tree\r\n\r\nMany things can be represented in a tree structure, such as directories, organizational hierarchies, taxonomy, and so on. The tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select tree nodes in the tree.\r\n\r\n## Usage\r\n\r\n```html\r\n<m-tree id='myTree' checkbox node=\"{\r\n\ttitle: 'p-0',\r\n\tid: 1,\r\n\ticon: 'account_balance_wallet',\r\n\tchildren: [\r\n\t\t{\r\n\t\t\ttitle: 'p-1',\r\n\t\t\tid: 2,\r\n\t\t\ticon: 'assignment_ind',\r\n\t\t\tchildren: [\r\n\t\t\t\t{ title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },\r\n\t\t\t\t{ title: 'p-2.5', id: 13, icon: 'chrome_reader_mode' }\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'p-4',\r\n\t\t\tid: 4,\r\n\t\t\ticon: 'extension',\r\n\r\n\t\t\tchildren: [\r\n\t\t\t\t{\r\n\t\t\t\t\ttitle: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,\r\n\t\t\t\t\tdisabled: true\r\n\t\t\t\t},\r\n\t\t\t\t{ title: '\u9879\u76ee\u516d', id: 6, icon: 'favorite' },\r\n\t\t\t\t{ title: '\u9879\u76ee7', id: 7 }\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'p-11',\r\n\t\t\tid: 14,\r\n\t\t\ticon: 'group_work',\r\n\t\t\tchildren: [\r\n\t\t\t\t{\r\n\t\t\t\t\ttitle: 'p-12', id: 12, icon: 'fingerprint', checked: true\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t]\r\n}\">\r\n</m-tree>\r\n```\r\n\r\n## Javascript\r\n\r\n```js\r\nvar myTree = document.querySelector('#myTree')\r\nvar nodeData = myTree.props.node\r\n\r\nmyTree.addEventListener('check', (evt) => {\r\n\tconst node = getNodeById(evt.detail.id, nodeData)\r\n\tif (!node.children) {\r\n\t\tnode.checked = evt.detail.checked\r\n\t} else {\r\n\t\tcheckAll(node, evt.detail.state !== 'checked')\r\n\t}\r\n\tmyTree.setAttribute('node', nodeData)\r\n})\r\n\r\n\r\nmyTree.addEventListener('toggle', (evt) => {\r\n\tconst node = getNodeById(evt.detail.id, nodeData)\r\n\tnode.close = !node.close\r\n\tmyTree.setAttribute('node', nodeData)\r\n})\r\n\r\nmyTree.addEventListener('nodeclick', (evt) => {\r\n\tconst pre = getNodeById(evt.detail.pre, nodeData)\r\n\tpre.selected = false\r\n\tconst node = getNodeById(evt.detail.id, nodeData)\r\n\tnode.selected = true\r\n\tmyTree.setAttribute('node', nodeData)\r\n})\r\n\r\n\r\nfunction checkAll(node, checked) {\r\n\tnode.children && node.children.forEach(child => {\r\n\t\tchild.checked = checked\r\n\t\tcheckAll(child, checked)\r\n\t})\r\n}\r\n\r\nfunction getNodeById(id, node) {\r\n\tif (node.id === id) return node\r\n\tif (node.children) {\r\n\t\tfor (let i = 0, len = node.children.length; i < len; i++) {\r\n\t\t\tlet child = node.children[i]\r\n\t\t\tlet target = getNodeById(id, child)\r\n\t\t\tif (target) {\r\n\t\t\t\treturn target\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n```jsx\r\n{\r\n\tnode: obj,\r\n\tcheckbox: boolean\r\n}\r\n```\r\n\r\n### Event\r\n\r\n```jsx\r\n{\r\n\ttoggle: function, \r\n\tnodeclick: function,\r\n\tcheck: function\r\n}\r\n```\r\n"}});
//# sourceMappingURL=55.2c6958aa.chunk.js.map
import { VElement, VNodeList } from '../types'

function createVElement(
	tag: any,
	config: any,
	children: VNodeList = []
): VElement {
	const { className } = config
	return {
		tag,
		props: {
			children: children,
		},
		className: className,
		dom: null,
	}
}

function mountVElement(vElement: VElement, parentDOMNode: HTMLElement) {
	const { tag, className, props } = vElement

	const domNode = document.createElement(tag)
	vElement.dom = domNode

	if (props?.children) {
		props.children.forEach((child) =>
			mountVElement(child as VElement, domNode)
		)
	}

	if (className !== undefined) {
		domNode.className = className
	}

	parentDOMNode.appendChild(domNode)
}

const root = document.body
const myApp = createVElement('div', { className: 'my-class' }, [
	createVElement('h1', { className: 'my-header' }),
	createVElement('p', { className: 'my-paragraph' }),
])

mountVElement(myApp, root)

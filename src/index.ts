import { VElement, VElementConfig, VNode, VNodeList, VText } from '../types'

function createVElement(
	tag: any,
	config: VElementConfig,
	children: VNodeList = []
): VElement {
	const { className, style } = config
	return {
		tag,
		style: style,
		props: {
			children: children,
		},
		className: className,
		dom: null,
	} satisfies VElement
}

function mountVElement(vElement: VElement, parentDOMNode: HTMLElement) {
	const { tag, className, props, style } = vElement

	const domNode = document.createElement(tag)
	vElement.dom = domNode

	if (props?.children) {
		props.children.forEach((child) => mount(child as VNode, domNode))
	}

	if (className !== undefined) {
		domNode.className = className
	}

	if (style !== undefined) {
		Object.keys(style).forEach(
			//@ts-ignore
			(sKey) => (domNode.style[sKey] = style[sKey])
		)
	}

	parentDOMNode.appendChild(domNode)
}

function mountVText(VText: VText, parentDOMNode: HTMLElement) {
	parentDOMNode.textContent = VText.toString()
}

function mount(input: VNode, parentDOMNode: HTMLElement) {
	if (typeof input === 'string' || typeof input === 'number') {
		mountVText(input as VText, parentDOMNode)
	} else {
		mountVElement(input as VElement, parentDOMNode)
	}
}

const root = document.body
const myApp = createVElement('div', { className: 'my-class' }, [
	createVElement('h1', {
		className: 'my-header',
		style: { backgroundColor: 'red', width: '50px', height: '50px' },
	}),
	createVElement('p', { className: 'my-paragraph' }, [
		'This is a paragraph',
	]),
])

mountVElement(myApp, root)

import { VElement } from '../types'

function createVElement(tag: any, config: any): VElement {
	const { className } = config
	return {
		tag,
		className: className,
		dom: null,
	}
}

function mountVElement(vElement: VElement, parentDOMNode: HTMLElement) {
	const { tag, className } = vElement

	const domNode = document.createElement(tag)
	vElement.dom = domNode

	if (className !== undefined) {
		domNode.className = className
	}

	parentDOMNode.appendChild(domNode)
}

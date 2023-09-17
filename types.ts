type VNode = VElement | VText
type VNodeList = VNode[]

type VElement = {
	tag: string
	props: {
		children: VNodeList
	}
}

type VText = string | number

import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = { cartItems: [], totalQuantity: 0 }

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity
			state.items = action.payload.items
		},
		addItemToCart(state, action) {
			state.totalQuantity++
			const newItem = action.payload
			const existingItem = state.cartItems.find(
				(item) => item.id === newItem.id
			)
			if (!existingItem) {
				state.cartItems.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				})
			} else {
				existingItem.quantity++
				existingItem.totalPrice =
					existingItem.totalPrice + newItem.price
			}
		},
		removeItemFromCart(state, action) {
			state.totalQuantity--
			const id = action.payload
			const existingItem = state.cartItems.find((item) => item.id === id)
			if (existingItem.quantity === 1) {
				state.cartItems = state.cartItems.filter(
					(item) => item.id !== id
				)
			} else {
				existingItem.quantity--
				existingItem.totalPrice =
					existingItem.totalPrice - existingItem.price
			}
		},
	},
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer

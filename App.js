import React from 'react'
import { View, Button, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'

import pedra from './src/assets/pedra.jpg'
import papel from './src/assets/papel.jpg'
import tesoura from './src/assets/tesoura.jpg'

function App(props) {
	const [appMovement, setAppMovement] = React.useState()
	const [result, setResult] = React.useState()
	const movements = [pedra, papel, tesoura]

	function _handleWinner(playerMovement) {
		// define a jogada do app
		const i = Math.floor(Math.random() * movements.length)
		const appMovement = movements[i]
		setAppMovement(appMovement)

		// verifica vencedor
		if (playerMovement === appMovement) setResult(`Empate`)
		else if (
			(playerMovement === pedra && appMovement !== papel) ||
			(playerMovement === papel && appMovement !== tesoura) ||
			(playerMovement === tesoura && appMovement !== pedra)
		)
			setResult(`Você venceu`)
		else setResult(`App venceu`)
	}

	function _handleReset() {
		setAppMovement()
		setResult()
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}> JOKENPO </Text>
			<View style={styles.board}>
				<Image source={appMovement} />
			</View>
			<View style={styles.controls}>
				<TouchableOpacity style={styles.touchable} onPress={() => _handleWinner(pedra)}>
					<Image source={pedra} style={styles.image} />
					<Text>Pedra</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.touchable} onPress={() => _handleWinner(papel)}>
					<Image source={papel} style={styles.image} />
					<Text>Papel</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.touchable} onPress={() => _handleWinner(tesoura)}>
					<Image source={tesoura} style={styles.image} />
					<Text>Tesoura</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.result}> {result} </Text>
			<Button title='Reiniciar o jogo' onPress={_handleReset} />
			<View style={{ marginBottom: 48 }} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(255,255,255)',
	},
	header: {
		marginTop: 100,
		fontSize: 60,
		fontWeight: 'bold',
	},
	board: {
		flex: 1,
		padding: 32,
	},
	controls: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	touchable: {
		borderWidth: 1,
		borderRadius: 16,
		minWidth: 120,
		minHeight: 170,
		margin: 8,
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 100,
		height: 150,
		alignSelf: 'center',
		marginBottom: 8,
	},
	result: {
		fontSize: 20,
		marginTop: 16,
		marginBottom: 48,
	},
})

export default App

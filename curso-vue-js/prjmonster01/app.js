const randomPower = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			message: `Rand Power: ${randomPower(10, 15)}`,
			currentRound: 0,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		monsterBarStyles() {
			return { width: `${this.monsterHealth}%` };
		},
		playerBarStyles() {
			return { width: `${this.playerHealth}%` };
		},
		mayUseSpecialAtack() {
			return this.currentRound % 3 !== 0;
		},
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				// draw
				this.winner = 'draw';
			} else if (value <= 0) {
				//player lost
				this.winner = 'monster';
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				// draw
				this.winner = 'draw';
			} else if (value < 0) {
				// monster lost
				this.winner = 'player';
			}
		},
	},
	methods: {
		startGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.currentRound = 0;
			this.winner = null;
			this.logMessages = [];
		},
		atackOnMonster() {
			this.increaseRound();
			const attackValue = randomPower(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessages('player', 'attack', attackValue);
			this.atackOnPlayer();
		},
		atackOnPlayer() {
			const attackValue = randomPower(8, 15);
			this.playerHealth -= attackValue;
			this.addLogMessages('monster', 'attack', attackValue);
			this.checkHealthUnderZero();
		},
		specialAtackOnMonster() {
			this.increaseRound();
			const attackValue = randomPower(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessages('player', 'attack', attackValue);
			this.atackOnPlayer();
		},
		healPlayer() {
			this.increaseRound();
			const attackValue = randomPower(8, 20);
			this.playerHealth += attackValue;
			this.addLogMessages('player', 'heal', attackValue);
			if (this.playerHealth > 100) {
				this.playerHealth = 100;
			}
			this.atackOnPlayer();
		},
		checkHealthUnderZero() {
			if (this.playerHealth < 0) {
				this.playerHealth = 0;
			}
			if (this.monsterHealth < 0) {
				this.monsterHealth = 0;
			}
		},
		surrender() {
			this.winner = 'monster';
		},
		addLogMessages(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
		increaseRound() {
			this.currentRound++;
		},
	},
});

app.mount('#game');

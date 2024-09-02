		// Get all menu items
		const menuItems = document.querySelectorAll('.menu-item');

		// Add event listeners for hover and click on each menu item
		menuItems.forEach(menuItem => {
			menuItem.addEventListener('mouseenter', () => {
				document.getElementById('hover-sound').play();
			});
			menuItem.addEventListener('click', () => {
				document.getElementById('click-sound').play();
			});
		});
		
				// Get sound icon element and audio elements
				const soundIcon = document.getElementById('sound-icon');
		const hoverSound = document.getElementById('hover-sound');
		const clickSound = document.getElementById('click-sound');
		let soundEnabled = true;

		// Add event listener to sound icon
		soundIcon.addEventListener('click', () => {
			if (soundEnabled) {
				soundIcon.textContent = "Sound Off";
				hoverSound.muted = true;
				clickSound.muted = true;
				soundEnabled = false;
			} else {
				soundIcon.textContent = "Sound On";
				hoverSound.muted = false;
				clickSound.muted = false;
				soundEnabled = true;
			}
		});

		// Update sound icon when sound is enabled or disabled
		hoverSound.addEventListener('play', () => {
			if (soundEnabled) {
				soundIcon.textContent = "Sound On";
			} else {
				soundIcon.textContent = "Sound Off";
			}
		});

		clickSound.addEventListener('play', () => {
			if (soundEnabled) {
				soundIcon.textContent = "Sound On";
			} else {
				soundIcon.textContent = "Sound Off";
			}
		});

	function openDonateModal() {
	document.getElementById('donate-modal').style.display = 'block';
	}

	function closeDonateModal() {
		document.getElementById('donate-modal').style.display = 'none';
	}

	function sendMessage() {
		window.location.href = "mailto:seuemail@exemplo.com";
	}
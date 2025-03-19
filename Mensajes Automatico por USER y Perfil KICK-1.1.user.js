// ==UserScript==
// @name         Mensajes Automatico por USER y Perfil KICK
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Un bot mejorado para chatear automáticamente en Kick
// @author       Juan Martin Barrientos
// @match        https://kick.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function encontrarChat() {
        return document.querySelector('div[contenteditable="true"]');
    }

    function escribirMensaje(mensaje) {
        let chatInput = encontrarChat();
        if (chatInput) {
            chatInput.focus();
            let event = new Event('input', { bubbles: true });
            chatInput.textContent = mensaje;
            chatInput.dispatchEvent(event);

            // Simula presionar ENTER
            let enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            chatInput.dispatchEvent(enterEvent);
        } else {
            console.warn('⚠️ No se encontró el campo de chat. Reintentando en 5 segundos...');
            setTimeout(verificarChatYEnviar, 5000);
        }
    }

    function verificarChatYEnviar() {
        let chatInput = encontrarChat();
        if (chatInput) {
            console.log('✅ Campo de chat detectado. Enviando mensaje...');
            escribirMensaje('Este es un mensaje de prueba. 🤖');
        } else {
            console.warn('⚠️ El chat no está disponible. Verificando nuevamente en 5 segundos...');
            setTimeout(verificarChatYEnviar, 5000);
        }
    }

    // Esperar a que la página cargue completamente
    window.addEventListener('load', () => {
        console.log('🔄 Iniciando Kick Chatbot...');
        setTimeout(verificarChatYEnviar, 5000);
    });
})();
// ==UserScript==
// @name         Mensajes Automatico por USER y Perfil KICK
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Un bot mejorado para chatear automáticamente en Kick
// @license MIT
// @author       Juan Martin Barrientos
// @match        https://kick.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kick.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("✅ Kick Chatbot Activo");

    window.onload = function() {
        startRandomMessageTimer();
    };

    function startRandomMessageTimer() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function sendRandomMessage() {
            let chatInput = document.querySelector('div[contenteditable="true"]');
            if (!chatInput) {
                console.warn("⚠️ No se encontró el campo de chat. Asegúrate de estar en la página correcta.");
                return;
            }

            let messages = [
                "¡Aguante chillin!",
                "Exploten el chat malditosssss !!!",
                "Denle follow al canal y activen notificaciones 🔔",
                "¡Chilling es familia! 🔥🔥🔥",
                "Vamos genteeee...",
                "Alguien nuevo en el chat? De donde son??",
                "chilling_ogziplook",
                "Se pone temazo?",
                "Vamos agusss",
                "Sigan el Canal los nuevos ",
                "DanceDance DanceDance DanceDance"
            ];

            let randomMessage = messages[Math.floor(Math.random() * messages.length)];

            chatInput.focus();
            document.execCommand("insertText", false, randomMessage);

            setTimeout(() => {
                let enterEvent = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    code: 'Enter',
                    keyCode: 13,
                    which: 13,
                    bubbles: true
                });
                chatInput.dispatchEvent(enterEvent);
                console.log(`📢 Mensaje enviado: ${randomMessage}`);
            }, 1000);
        }

        function initiateTimer() {
            let interval = getRandomInt(25000, 80000);
            console.log(`⏳ Próximo mensaje en: ${interval / 1000} segundos`);

            setTimeout(() => {
                sendRandomMessage();
                initiateTimer();
            }, interval);
        }

        initiateTimer();
    }
})();

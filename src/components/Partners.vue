<template>

        <div style="padding: 0px 50px; position: relative;" class="container">
            <div class="parceiros">
                <div class="shadow1"></div>
                <div class="shadow2"></div>
                <div class="parceiros-container">
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                    <img src="https://i.imgur.com/a1LTSfz.png" alt="Parceiro 1" />
                    <img src="https://i.imgur.com/CyMsIOn.png" alt="Parceiro 2" />
                    <img src="https://i.imgur.com/hsfHquE.png" alt="Parceiro 3" />
                </div>
            </div>
            <div class="sombra"></div>
        </div>
</template>

<script>
export default {
    name: 'AppHero',
    props: {
        msg: String
    }
}
</script>

<style scoped>

@media (min-width: 844px) { 
    .sombra {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Sombra agora ocupa 100% da largura da parceiros-container */
    height: 100%; /* Sombra vai ocupar a altura completa do container */
    background-image: linear-gradient(to left, #030303, #03030300, #03030300, #03030300, #030303);
    z-index: 1; /* Garante que a sombra fique abaixo dos logos */
}

.parceiros {
    position: relative;
    overflow: hidden;
    background-color: #f5f5f500;
    white-space: nowrap; 
}

.parceiros-container {
    padding: 50px;
    display: inline-flex;
    gap: 30px;
    animation: move 100s linear infinite; /* Animação contínua de 100 segundos */
    z-index: 2; /* Garante que os logos fiquem acima da sombra */
}

.parceiros-container img {
    max-height: 50px;
}

@keyframes move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%); /* Move todas as logos para a esquerda */
    }
}

}


@media (max-width: 844px) {
    
@keyframes move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%); /* Move todas as logos para a esquerda */
    }
}

.sombra {
    position: absolute;
    top: 0;
    left: 49px;
    width: 75%;
    height: 100%;
    background-image: linear-gradient(to left, #030303, #03030300, #03030300, #03030300,#030303);
}


.parceiros {
    position: relative;
    position: relative;
    overflow: hidden;
    background-color: #f5f5f500;
    white-space: nowrap; 
}

.parceiros-container {
    padding: 50px;
    display: inline-flex;
    gap: 30px;
    animation: move 100s linear infinite; /* Animação contínua de 10 minutos */
}
.parceiros-container img {

    max-height: 50px;
}
}





</style>
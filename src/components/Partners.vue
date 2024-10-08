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
        width: 100%; 
        height: 100%; 
        background-image: linear-gradient(to left, #030303, #03030300, #03030300, #03030300, #030303);
        z-index: 1; 
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
        animation: move 100s linear infinite;
        -webkit-animation: move 100s linear infinite; 
        will-change: transform; 
        z-index: 2; 
    }

    .parceiros-container img {
        max-height: 50px;
    }

    @keyframes move {
        0% {
            transform: translateX(0);
            -webkit-transform: translateX(0); 
        }
        100% {
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%); 
        }
    }
}

@media (max-width: 844px) {
    @keyframes move {
        0% {
            transform: translateX(0);
            -webkit-transform: translateX(0); 
        }
        100% {
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%); 
        }
    }

    .sombra {
        position: absolute;
        top: 0;
        left: 49px;
        width: 75%;
        height: 100%;
        background-image: linear-gradient(to left, #030303, #03030300, #03030300, #03030300, #030303);
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
        animation: move 50s linear infinite;
        -webkit-animation: move 50s linear infinite; 
        will-change: transform; 
    }

    .parceiros-container img {
        max-height: 50px;
    }
}
</style>

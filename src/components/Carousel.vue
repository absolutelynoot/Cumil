<template>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <video width="100%"  autoplay muted loop>
                    <source src="../assets/Video/step1.MOV" type="video/mp4">
                    </video>
                <div class="carousel-caption d-md-block">
                    <h5>Flour & Pea Protein Coating</h5>
                </div>
            </div>
            <div class="carousel-item">
                <video width="100%" autoplay muted loop>
                    <source src="../assets/Video/step2.MOV" type="video/mp4">
                    </video>
                <div class="carousel-caption d-md-block">
                    <h5>Plant Based Milk Dip</h5>
                </div>
            </div>
            <div class="carousel-item ">
                <video width="100%" autoplay muted>
                    <source src="../assets/Video/step3.mp4" type="video/mp4">
                    </video>
                <div class="carousel-caption d-md-block">
                    <h5>Textured Pea Protein Breading</h5>
                </div>
            </div>
            <div class="carousel-item ">
                <video width="100%" autoplay muted>
                    <source src="../assets/Video/step4.MOV" type="video/mp4">
                    </video>
                <div class="carousel-caption d-md-block">
                    <h5>Deep Frying</h5>
                </div>
            </div>
            <div class="carousel-item ">
                <video width="100%" autoplay muted>
                    <source src="../assets/Video/step5.MOV" type="video/mp4">
                    </video>
                <div class="carousel-caption d-md-block">
                    <h5>Ready to be served!</h5>
                </div>
            </div>
            <div class="carousel-item ">
                <video width="100%" autoplay muted>
                    <source src="../assets/Video/step6.MOV" type="video/mp4">
                    </video>
                <div class="carousel-caption d-md-block">
                    <h5>Ready to be served!</h5>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>


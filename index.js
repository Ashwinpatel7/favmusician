const artistData = {
    edSheeran: {
        name: "Ed Sheeran",
        traits: "You are soulful and sensitive, with a deep appreciation for heartfelt lyrics and melodies.",
        image: "https://example.com/images/edsheeran.jpg"
    },
    taylorSwift: {
        name: "Taylor Swift",
        traits: "You are expressive and romantic, often finding connections to personal experiences through music.",
        image: "https://example.com/images/taylorswift.jpg"
    },
    coldplay: {
        name: "Coldplay",
        traits: "You are introspective and imaginative, enjoying music that explores complex emotions and themes.",
        image: "https://example.com/images/coldplay.jpg"
    },
    eminem: {
        name: "Eminem",
        traits: "You are bold and outspoken, with a strong sense of individuality and a penchant for lyrical storytelling.",
        image: "https://example.com/images/eminem.jpg"
    }
};

function showCharacterTraits() {
    const select = document.getElementById("artist-select");
    const result = document.getElementById("result");
    const artistKey = select.value;

    if (artistKey) {
        const artist = artistData[artistKey];
        result.innerHTML = `<img src="${artist.image}" alt="${artist.name}"><h2>${artist.name}</h2><p>${artist.traits}</p>`;
        result.style.display = "block";
    } else {
        result.innerHTML = "<p>Please select an artist.</p>";
        result.style.display = "block";
    }
}

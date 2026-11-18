const box185 = [
  {
    box186: 1,
    box187: "Porsche",
    box188: "911 Turbo S",
    box189: 2025,
    box190: 234000,
    box191: "3.7L Twin-Turbo Flat-6",
    box192: "650 HP",
    box193: "8-Speed PDK",
    box194: "Supercars",
    box195: true,
    box196: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
    box197: "Finished in Jet Black Metallic over full black leather with brushed aluminum inlays. Equipped with PASM sport suspension and ceramic composite brakes."
  },
  {
    box186: 2,
    box187: "Mercedes-Benz",
    box188: "S-Class S580",
    box189: 2025,
    box190: 148000,
    box191: "4.0L V8 Biturbo Mild-Hybrid",
    box192: "496 HP",
    box193: "9G-TRONIC Automatic",
    box194: "Luxury",
    box195: true,
    box196: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
    box197: "The benchmark of executive serenity. Features rear executive lounge seating, Burmester 4D surround acoustics, and E-Active Body Control."
  },
  {
    box186: 3,
    box187: "BMW",
    box188: "M5 Competition",
    box189: 2025,
    box190: 139500,
    box191: "4.4L M TwinPower Turbo V8",
    box192: "625 HP",
    box193: "8-Speed M Steptronic",
    box194: "Performance",
    box195: true,
    box196: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
    box197: "Frozen Black exterior with M Carbon ceramic brakes, configurable M xDrive all-wheel drive, and Merino full-grain leather cabin."
  },
  {
    box186: 4,
    box187: "Lamborghini",
    box188: "Huracán EVO",
    box189: 2024,
    box190: 289000,
    box191: "5.2L Naturally Aspirated V10",
    box192: "640 HP",
    box193: "7-Speed LDF Dual-Clutch",
    box194: "Supercars",
    box195: true,
    box196: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=85",
    box197: "Nero Nemesis matte finish with forged carbon exterior package, rear-wheel steering, and telemetry-integrated Lamborghini Dinamica Veicolo."
  },
  {
    box186: 5,
    box187: "Ferrari",
    box188: "488 GTB",
    box189: 2023,
    box190: 318000,
    box191: "3.9L Twin-Turbo V8",
    box192: "670 HP",
    box193: "7-Speed F1 Dual-Clutch",
    box194: "Supercars",
    box195: true,
    box196: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1400&q=85",
    box197: "Nero Daytona coachwork paired with Daytona carbon racing seats, Scuderia shields, and Side Slip Angle Control 2."
  },
  {
    box186: 6,
    box187: "Audi",
    box188: "RS7 Performance",
    box189: 2025,
    box190: 156000,
    box191: "4.0L TFSI Twin-Turbo V8",
    box192: "630 HP",
    box193: "8-Speed Tiptronic",
    box194: "Performance",
    box195: true,
    box196: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
    box197: "Mythos Black Sportback silhouette with quattro sport differential, RS dynamic package plus, and Bang & Olufsen 3D Advanced Sound."
  },
  {
    box186: 7,
    box187: "Range Rover",
    box188: "Sport SV",
    box189: 2025,
    box190: 184000,
    box191: "4.4L Twin-Turbo V8 MHEV",
    box192: "635 HP",
    box193: "8-Speed ZF Automatic",
    box194: "SUV",
    box195: true,
    box196: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85",
    box197: "Santorini Black with carbon fiber bonnet, 6D Dynamics air suspension, and Body and Soul tactile audio seats."
  },
  {
    box186: 8,
    box187: "Bentley",
    box188: "Continental GT Speed",
    box189: 2025,
    box190: 295000,
    box191: "6.0L Twin-Turbo W12",
    box192: "659 HP",
    box193: "8-Speed Dual-Clutch",
    box194: "Luxury",
    box195: true,
    box196: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85",
    box197: "Beluga solid coachwork, Mulliner Driving Specification, Bentley Rotating Display, and hand-stitched diamond quilting."
  },
  {
    box186: 9,
    box187: "Porsche",
    box188: "Taycan Turbo GT",
    box189: 2026,
    box190: 239000,
    box191: "Dual-Motor 800V Electric",
    box192: "1,019 HP",
    box193: "2-Speed Performance Trans",
    box194: "Electric",
    box195: false,
    box196: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=85",
    box197: "Next-generation electric flagship with Attack Mode overboost, Porsche Active Ride chassis, and lightweight carbon-weave bucket seats."
  }
];

let box198 = [];
try {
  const box199 = localStorage.getItem("box200");
  if (box199) box198 = JSON.parse(box199);
} catch (box201) {
  box198 = [];
}

let box202 = false;

function box203(box204) {
  return "$" + box204.toLocaleString("en-US");
}

function box205() {
  try {
    localStorage.setItem("box200", JSON.stringify(box198));
  } catch (box206) {}
  document.getElementById("box152").textContent = box198.length;
  box207();
}

function box208(box209) {
  const box210 = box198.indexOf(box209);
  if (box210 === -1) {
    box198.push(box209);
  } else {
    box198.splice(box210, 1);
  }
  box205();
  box211();
  box212();
}

function box213(box214) {
  const box215 = box198.includes(box214.box186);
  return `
    <article class="box51">
      <div class="box52">
        <img class="box53" src="${box214.box196}" alt="${box214.box187} ${box214.box188}" loading="lazy">
        <span class="box54">${box214.box189} &bull; ${box214.box194}</span>
        <button class="box55 ${box215 ? "box56" : ""}" data-fav="${box214.box186}" aria-label="Favorite Vehicle">
          <i class="${box215 ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
      <div class="box57">
        <div class="box58">
          <div>
            <div class="box59">${box214.box187}</div>
            <h3 class="box60">${box214.box188}</h3>
          </div>
          <div class="box61">${box203(box214.box190)}</div>
        </div>
        <div class="box62">
          <div class="box63">
            <span class="box64">ENGINE</span>
            <span class="box65">${box214.box191}</span>
          </div>
          <div class="box63">
            <span class="box64">POWER</span>
            <span class="box65">${box214.box192}</span>
          </div>
          <div class="box63">
            <span class="box64">TRANSMISSION</span>
            <span class="box65">${box214.box193}</span>
          </div>
        </div>
        <div class="box66">
          <button class="box67" data-view="${box214.box186}">VIEW VEHICLE <i class="fa-solid fa-arrow-right"></i></button>
          <span class="box68">CERTIFIED</span>
        </div>
      </div>
    </article>
  `;
}

function box211() {
  const box216 = document.getElementById("box157");
  const box217 = box185.filter(box218 => box218.box195);
  box216.innerHTML = box217.map(box213).join("");
}

function box219() {
  const box220 = document.getElementById("box161");
  const box221 = [...new Set(box185.map(box222 => box222.box187))];
  box221.forEach(box223 => {
    const box224 = document.createElement("option");
    box224.value = box223;
    box224.textContent = box223;
    box220.appendChild(box224);
  });
}

function box212() {
  const box225 = document.getElementById("box160").value.trim().toLowerCase();
  const box226 = document.getElementById("box161").value;
  const box227 = document.getElementById("box162").value;
  const box228 = document.getElementById("box163").value;
  const box229 = document.getElementById("box164").value;

  let box230 = box185.filter(box231 => {
    const box232 = `${box231.box187} ${box231.box188} ${box231.box194}`.toLowerCase();
    if (box225 && !box232.includes(box225)) return false;
    if (box226 !== "ALL" && box231.box187 !== box226) return false;
    if (box227 !== "ALL" && box231.box194 !== box227) return false;
    if (box228 === "UNDER200" && box231.box190 >= 200000) return false;
    if (box228 === "200TO280" && (box231.box190 < 200000 || box231.box190 > 280000)) return false;
    if (box228 === "OVER280" && box231.box190 <= 280000) return false;
    if (box202 && !box198.includes(box231.box186)) return false;
    return true;
  });

  if (box229 === "PRICE_ASC") {
    box230.sort((box233, box234) => box233.box190 - box234.box190);
  } else if (box229 === "PRICE_DESC") {
    box230.sort((box233, box234) => box234.box190 - box233.box190);
  } else if (box229 === "NEWEST") {
    box230.sort((box233, box234) => box234.box189 - box233.box189);
  }

  const box235 = document.getElementById("box168");
  const box236 = document.getElementById("box166");
  box236.textContent = `SHOWING ${box230.length} VEHICLE${box230.length === 1 ? "" : "S"}`;

  if (box230.length === 0) {
    box235.innerHTML = `
      <div class="box96">
        <div class="box59">NO MATCHING VEHICLES</div>
        <h3 class="box60" style="margin:0.6rem 0 1.2rem;">REFINE YOUR CRITERIA</h3>
        <button id="box237" class="box67">CLEAR ALL FILTERS</button>
      </div>
    `;
    const box238 = document.getElementById("box237");
    if (box238) box238.addEventListener("click", box239);
  } else {
    box235.innerHTML = box230.map(box213).join("");
  }
}

function box239() {
  document.getElementById("box160").value = "";
  document.getElementById("box161").value = "ALL";
  document.getElementById("box162").value = "ALL";
  document.getElementById("box163").value = "ALL";
  document.getElementById("box164").value = "DEFAULT";
  box202 = false;
  document.getElementById("box167").classList.remove("box94");
  box212();
}

function box240(box241) {
  const box242 = box185.find(box243 => box243.box186 === box241);
  if (!box242) return;

  const box244 = box198.includes(box242.box186);
  document.getElementById("box179").src = box242.box196;
  document.getElementById("box180").innerHTML = `
    <span class="box47">${box242.box189} &bull; ${box242.box194}</span>
    <div class="box59" style="margin-top:0.4rem;">${box242.box187}</div>
    <h3 class="box48" style="font-size:1.9rem;margin-bottom:0.6rem;">${box242.box188}</h3>
    <div class="box84" style="margin-bottom:1.2rem;">${box203(box242.box190)}</div>
    <p class="box49" style="font-size:0.9rem;">${box242.box197}</p>
    <div class="box135">
      <div class="box63">
        <span class="box64">ENGINE</span>
        <span class="box65">${box242.box191}</span>
      </div>
      <div class="box63">
        <span class="box64">HORSEPOWER</span>
        <span class="box65">${box242.box192}</span>
      </div>
      <div class="box63">
        <span class="box64">TRANSMISSION</span>
        <span class="box65">${box242.box193}</span>
      </div>
      <div class="box63">
        <span class="box64">AVAILABILITY</span>
        <span class="box65">Immediate Delivery</span>
      </div>
    </div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:auto;">
      <button id="box245" class="box34" style="flex:1;">INQUIRE NOW</button>
      <button id="box246" class="box35">${box244 ? "SAVED" : "SAVE VEHICLE"}</button>
    </div>
  `;

  document.getElementById("box177").classList.add("box130");

  document.getElementById("box245").addEventListener("click", () => {
    document.getElementById("box177").classList.remove("box130");
    const box247 = document.getElementById("box173");
    box247.value = `Private acquisition inquiry regarding the ${box242.box189} ${box242.box187} ${box242.box188} (${box203(box242.box190)}).`;
    document.getElementById("box149").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("box246").addEventListener("click", () => {
    box208(box242.box186);
    box240(box242.box186);
  });
}

function box207() {
  const box248 = document.getElementById("box183");
  if (box198.length === 0) {
    box248.innerHTML = `<p style="color:var(--text-silver);font-size:0.86rem;">Your private shortlist is currently empty. Select the heart icon on any automobile to save it here.</p>`;
    return;
  }

  const box249 = box185.filter(box250 => box198.includes(box250.box186));
  box248.innerHTML = box249.map(box251 => `
    <div class="box139">
      <img class="box140" src="${box251.box196}" alt="${box251.box188}">
      <div style="flex:1;">
        <div class="box59" style="font-size:0.58rem;">${box251.box187}</div>
        <div class="box65" style="font-size:0.86rem;">${box251.box188}</div>
        <div style="font-size:0.76rem;color:var(--text-silver);">${box203(box251.box190)}</div>
      </div>
      <button class="box17" data-fav="${box251.box186}" aria-label="Remove Favorite">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");
}

document.addEventListener("click", box252 => {
  const box253 = box252.target.closest("[data-fav]");
  if (box253) {
    box208(Number(box253.getAttribute("data-fav")));
    return;
  }

  const box254 = box252.target.closest("[data-view]");
  if (box254) {
    box240(Number(box254.getAttribute("data-view")));
    return;
  }

  const box255 = box252.target.closest("[data-cat]");
  if (box255) {
    const box256 = box255.getAttribute("data-cat");
    document.getElementById("box162").value = box256;
    box202 = false;
    document.getElementById("box167").classList.remove("box94");
    box212();
    document.getElementById("box159").scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => {
  const box257 = document.getElementById("box144");
  if (window.scrollY > 50) {
    box257.classList.add("box10");
  } else {
    box257.classList.remove("box10");
  }

  const box258 = document.getElementById("box156");
  if (box258 && window.scrollY < window.innerHeight) {
    box258.style.transform = `scale(${1.06 + window.scrollY * 0.00012}) translateY(${window.scrollY * 0.16}px)`;
  }
});

const box259 = new IntersectionObserver(box260 => {
  box260.forEach(box261 => {
    if (box261.isIntersecting) {
      box261.target.classList.add("box142");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".box141").forEach(box262 => box259.observe(box262));

document.getElementById("box153").addEventListener("click", () => {
  document.getElementById("box154").classList.add("box21");
});

document.getElementById("box155").addEventListener("click", () => {
  document.getElementById("box154").classList.remove("box21");
});

document.querySelectorAll(".box24").forEach(box263 => {
  box263.addEventListener("click", () => {
    document.getElementById("box154").classList.remove("box21");
  });
});

document.getElementById("box150").addEventListener("click", () => {
  document.getElementById("box159").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => document.getElementById("box160").focus(), 650);
});

document.getElementById("box151").addEventListener("click", () => {
  box207();
  document.getElementById("box181").classList.add("box137");
});

document.getElementById("box182").addEventListener("click", () => {
  document.getElementById("box181").classList.remove("box137");
});

document.getElementById("box184").addEventListener("click", () => {
  document.getElementById("box181").classList.remove("box137");
  const box264 = box185.filter(box265 => box198.includes(box265.box186)).map(box266 => `${box266.box187} ${box266.box188}`);
  if (box264.length > 0) {
    document.getElementById("box173").value = `I would like to request private dossier details for my shortlisted vehicles: ${box264.join(", ")}.`;
  }
  document.getElementById("box149").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("box178").addEventListener("click", () => {
  document.getElementById("box177").classList.remove("box130");
});

document.getElementById("box177").addEventListener("click", box267 => {
  if (box267.target.id === "box177") {
    document.getElementById("box177").classList.remove("box130");
  }
});

document.getElementById("box158").addEventListener("click", () => {
  box240(1);
});

document.getElementById("box160").addEventListener("input", box212);
document.getElementById("box161").addEventListener("change", box212);
document.getElementById("box162").addEventListener("change", box212);
document.getElementById("box163").addEventListener("change", box212);
document.getElementById("box164").addEventListener("change", box212);
document.getElementById("box165").addEventListener("click", box239);

document.getElementById("box167").addEventListener("click", function() {
  box202 = !box202;
  this.classList.toggle("box94", box202);
  box212();
});

document.getElementById("box169").addEventListener("submit", box268 => {
  box268.preventDefault();
  const box269 = document.getElementById("box170").value.trim();
  const box270 = document.getElementById("box171").value.trim();
  const box271 = document.getElementById("box172").value.trim();
  const box272 = document.getElementById("box173").value.trim();
  const box273 = document.getElementById("box174");

  if (!box269 || !box270 || !box270.includes("@") || !box271 || !box272) {
    box273.className = "box119 box121";
    box273.textContent = "Please complete all fields with a valid email address before transmitting your inquiry.";
    return;
  }

  box273.className = "box119 box120";
  box273.textContent = `Thank you, ${box269}. Your private inquiry has been registered with the VELTOR / AKH concierge desk.`;
  document.getElementById("box169").reset();
});

document.getElementById("box176").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", () => {
  box219();
  box211();
  box212();
  box205();
  setTimeout(() => {
    document.getElementById("box143").classList.add("box2");
  }, 1150);
});
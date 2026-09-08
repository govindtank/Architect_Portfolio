#!/usr/bin/env python3
import urllib.request
import re
import json
import os

app_ids = {
    "lacrosse-view": {
        "pkg": "com.lacrosseview.app",
        "name": "La Crosse View",
        "tags": ["Android", "IoT", "Sensors", "Background Services"],
        "role": "Hardware data synchronization & real-time environmental monitoring app with custom weather station sensor bridges."
    },
    "max-fun-club": {
        "pkg": "com.maxfunclub",
        "name": "Max Fun Club",
        "tags": ["Flutter", "Mobile", "Entertainment", "State Management"],
        "role": "Gamified entertainment and rewards platform engineered with smooth 60fps animations and real-time user state synchronization."
    },
    "lacrosse-alerts-mobile": {
        "pkg": "com.lacrossetechnology.lacrossemobile",
        "name": "La Crosse Alerts Mobile",
        "tags": ["Android Native", "Alerts", "Hardware Sync", "Push Architecture"],
        "role": "Mission-critical remote temperature/humidity alert monitoring system with customizable notification triggers and device diagnostics."
    },
    "baps-prakash": {
        "pkg": "org.baps.swaminarayanprakash",
        "name": "BAPS Prakash",
        "tags": ["Kotlin", "AWS CloudFront", "ExoPlayer", "Audio Service"],
        "role": "Secure audio/media streaming application serving 50k+ users with signed cookies, background playback, and Android Auto support."
    },
    "akshar-amrutam": {
        "pkg": "org.baps.akshar_amrutam",
        "name": "Akshar Amrutam",
        "tags": ["Flutter", "Bloc", "Clean Architecture", "Android Auto"],
        "role": "High-performance digital publication platform with 100k+ downloads, offline reading cache, and 99.95% crash-free stability."
    },
    "autozon-iot": {
        "pkg": "com.voiceofthings.smartindia",
        "name": "Autozon IoT",
        "tags": ["Flutter", "MQTT", "Vehicle Telemetry", "Hardware"],
        "role": "Real-time automotive IoT monitoring application utilizing MQTT for continuous vehicle hardware communication and battery optimization."
    }
}

out_dir = "/Users/govind/govindtank.github.io/public/images/projects"
os.makedirs(out_dir, exist_ok=True)

projects_data = []

for key, info in app_ids.items():
    pkg = info["pkg"]
    url = f"https://play.google.com/store/apps/details?id={pkg}&hl=en_IN"
    print(f"Fetching {pkg}...")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
        html = urllib.request.urlopen(req, timeout=15).read().decode()
        
        # Grab main app icon
        imgs = re.findall(r"https://play-lh\.googleusercontent\.com/[a-zA-Z0-9_\-=]+", html)
        icon_url = None
        for img in imgs:
            if "=s" in img or "=w" in img:
                base = img.split("=")[0]
                icon_url = f"{base}=s512-rw"
                break
        if not icon_url and imgs:
            icon_url = f"{imgs[0].split('=')[0]}=s512-rw"

        icon_file = f"{key}-icon.png"
        icon_path = os.path.join(out_dir, icon_file)

        if icon_url:
            icon_req = urllib.request.Request(icon_url, headers={"User-Agent": "Mozilla/5.0"})
            icon_data = urllib.request.urlopen(icon_req, timeout=15).read()
            with open(icon_path, "wb") as f:
                f.write(icon_data)
            print(f"  Saved icon: {icon_file} ({len(icon_data)} bytes)")

        projects_data.append({
            "title": info["name"],
            "description": info["role"],
            "tags": info["tags"],
            "image": f"/images/projects/{icon_file}",
            "playStoreLink": url,
            "link": "https://github.com/govindtank"
        })

    except Exception as e:
        print(f"  Error on {pkg}: {e}")

with open("/Users/govind/govindtank.github.io/scripts/projects_extracted.json", "w") as f:
    json.dump(projects_data, f, indent=2)

print("\nSuccessfully extracted all project assets.")

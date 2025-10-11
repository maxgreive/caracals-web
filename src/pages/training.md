---
layout: ../layouts/PageLayout.astro
title: Training
featuredImage: training.jpg
---

## Wintersaison 🥏❄️

Die Wintersaison steht an!
Aktuell trainieren wir montags und donnerstags draußen am Freudenberg:

**Montag**: 20:00 – 22:00 Uhr

**Donnerstag**: 19:00 – 21:00 Uhr

**Ort**: Kunstrasenplatz am Freudenberg 5, Wuppertal

Ab **29. Oktober** starten wir dann mit dem Hallentraining am Mittwoch:

**Montag**: 20:00 – 22:00 Uhr (Freudenberg, Kunstrasen)

**Mittwoch**: 20:00 – 22:00 Uhr (Gesamtschule Barmen, Sporthalle)

## Status

<span id="training-status">⌛ Lädt ...</span>

## Wichtig ⚠️

Wenn die Trainingsbeteiligung zu gering ist, fällt das Training aus.
Bitte schaut vor jedem Training hier auf der Seite vorbei, um den aktuellen Stand zu checken.

<script>
  const trainingStatus = document.querySelector('#training-status');

  if (trainingStatus) {
    const dbEndpoint = "https://sheetdb.io/api/v1/xy859kixabhhl";
    fetch(dbEndpoint)
      .then(response => response.json())
      .then(data => {
        if (data[0]?.status?.toLowerCase() === 'false') {
          return trainingStatus.textContent = '❌ Fällt aus!'
        }
        return trainingStatus.textContent = '✅ Findet statt!'
      });
  }
</script>
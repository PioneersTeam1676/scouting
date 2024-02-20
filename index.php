<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Scouting '24</title>
    <meta name="description" content="FRS Team 1676 - Scouting System 2024" />

    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="assets/img/logo.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <meta http-equiv="expires" content="Sun, 31 Dec 2018 1:00:00 GMT" />

    <link href="assets/img/favicon.ico" rel="icon" type="image/x-icon" />
    <!-- <link href="assets/css/bootstrap.v4.5.2.css" rel="stylesheet" type="text/css" media="all" /> -->
    <link href="assets/css/bootstrap.v5.3.2.css" rel="stylesheet" type="text/css" media="all" />

    <script>
      window.onbeforeunload = function() {
        return "Are you sure you want to leave? Your progress might not be saved!";
      }
    </script>

    <script src="assets/js/qrcode-scan.js"></script>
    
    <style>
      <?php
        include "styles.css";
      ?>
    </style>

    <!-- <link href="styles.css" rel="stylesheet" type="text/css" /> -->
    <!-- <link href="scanner.css" rel="stylesheet" type="text/css" /> -->

  </head>

  <body id="body">

    <div id="container">
      <div id="content">
        <div id="head" class="menu-bar d-inline d-md-flex mb-md-3">
          <div class="row">
            <div class="col-6 col-sm-8 col-md-6 col-xl-8" style="display: flex; align-items: center; padding-top: 7px;">
              <img id="sunburst" src="data:image/png;base64,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" onclick="if (confirm('Would you like to reload this page? Your changes may not be saved.')) location.reload(true);">
              <h2 class="d-none d-sm-block d-md-none d-xl-block single">Pi-oneer Scouting</h2>
              <h2 class="d-block d-sm-none d-md-block d-xl-none double">Pi-oneer Scouting</h2>
              <span class="d-none d-md-inline">
                <a class="online badge badge-success" style="display: none; color: #013204; background-color: #4ccb69; margin-left: 7px;">Online</a>
                <a class="offline badge badge-danger" style="display: none; color: #2a0707; background-color: #ff9da7; margin-left: 7px;">Offline</a>
                <a class="local badge badge-warning" style="display: none; color: #423d1c; background-color: #ffdd77; margin-left: 4px;"><span class="version">0.0</span>-local</a>
                <a class="server badge badge-secondary" style="display: none; color: #000; background-color: #9d9d9d; margin-left: 4px;"><span class="version">0.0</span>-serve</a>
                <a class="checking badge badge-dark" style="margin-left: 5px;">Testing Connection</a>
              </span>
            </div>
            <div class="col-6 col-sm-4 col-md-6 col-xl-4 float-right">
              <span class="d-none d-md-inline">
                <a href="#" data-toggle="modal" data-target="#treshy" role="button" style="color: transparent;">
                  <span class="material-icons" style="color: #fbcaff;">event</span>
                </a>
                <a href="#" data-toggle="modal" data-target="#import" role="button" style="color: transparent;">
                  <span class="material-icons" style="color: #9fa1ff;">cloud_download</span>
                </a>
              </span>
              <a href="#" data-toggle="modal" data-target="#settings" role="button">
                  <span class="material-icons" style="color: #d4d5ff; margin-right: 64px;">settings</span>
                </a>
              <span id="profile" data-toggle="modal" data-target="#user">
                <img id="profile-img" src="assets/img/profiles/jackdab-right.jpg" />
                <span id="profile-overlay" class="material-icons">supervised_user_circle</span>
              </span>
              <!-- <span class="material-icons" style="opacity: 0.9; visibility: hidden;">supervised_user_circle</span> -->
            </div>
          </div>
          <div class="row d-flex d-md-none">
            <div class="col-7" style="padding: 10px 0 0 24px;">
              <span class="d-inline d-md-none">
                <a class="online badge badge-success" style="display: none; color: #013204; background-color: #4ccb69;">Online</a>
                <a class="offline badge badge-danger" style="display: none; color: #2a0707; background-color: #ff9da7;">Offline</a>
                <a class="local badge badge-warning" style="display: none; color: #423d1c; background-color: #ffdd77;"><span class="version">0.0</span>-local</a>
                <a class="server badge badge-secondary" style="display: none; color: #000; background-color: #9d9d9d;"><span class="version">0.0</span>-serve</a>
                <a class="checking badge badge-dark">Testing Connection</a>
              </span>
            </div>
            <div class="col-5 float-right" style="position: relative; top: -7px; padding-left: 0;">
              <a href="#" data-toggle="modal" data-target="#treshy" role="button" style="color: transparent;">
                <span class="material-icons" style="color: #fbcaff; margin-left: 0; margin-right: 6px;">event</span>
              </a>
              <a href="#" data-toggle="modal" data-target="#import" role="button">
                <span class="material-icons" style="color: #9fa1ff; margin-left: 8px; margin-right: 8px;">cloud_download</span>
              </a>
            </div>
          </div>
        </div>
        <!-- /head -->

        <div id="mainForm">

          <div class="row">
            <div class="col-12 col-sm-6 main-split b-right b-bottom">
              <h3>Pre-Match</h3>
              <div class="row">

                <div class="col-6">
                  <div class="form-group">
                    <label for="matchNum">Match number</label>
                    <input type="number" class="form-control" id="matchNum">
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group">
                    <label for="alliance">Your alliance</label>
                    <select class="form-control" id="alliance" disabled>
                      <option selected>[Your color will be here]</option>
                      <option>Red</option>
                    </select>
                  </div>
                </div>
                
              </div>
              <div class="row mt-3">

                <div class="col-6">
                  <div class="form-group">
                    <label for="team">Your team</label>
                    <select class="form-control" id="team" disabled>
                      <option selected>[Your team will be here]</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="matchType" id="matchType1" value="1" checked>
                    <label class="form-check-label" for="matchType1">
                      Furthest
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="matchType" id="matchType2" value="2">
                    <label class="form-check-label" for="matchType2">
                      Middle
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="matchType" id="matchType3" value="3">
                    <label class="form-check-label" for="matchType3">
                      Closest
                    </label>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-12 col-sm-6 main-split b-bottom">
              <h3>Autonomous</h3>
              <div class="row">
                <div class="col-12 mb-2">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="autoLeave">
                    <label class="form-check-label" for="autoLeave">Robot left starting zone</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="autoAmpNotesScored" placeholder="Amp Scored">
                      <label for="autoAmpNotesScored">Amp Scored</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="autoAmpNotesMissed" placeholder="Amp Missed">
                      <label for="autoAmpNotesMissed">Amp Missed</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                </div>
                <div class="col-6">
                  
                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="autoSpeakerNotesScored" placeholder="Speaker Scored">
                      <label for="autoSpeakerNotesScored">Speaker Scored</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="autoSpeakerNotesMissed" placeholder="Speaker Missed">
                      <label for="autoSpeakerNotesMissed">Speaker Missed</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 main-split b-right m-top">
              <h3>Teleop</h3>
              
              <div class="row">
                <div class="col-6">

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="teleAmpNotesScored" placeholder="Amp Scored">
                      <label for="teleAmpNotesScored">Amp Scored</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="teleAmpNotesMissed" placeholder="Amp Missed">
                      <label for="teleAmpNotesMissed">Amp Missed</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                </div>
                <div class="col-6">
                  
                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="teleSpeakerNotesScored" placeholder="Speaker Scored">
                      <label for="teleSpeakerNotesScored">Speaker Scored</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="teleSpeakerNotesMissed" placeholder="Speaker Missed">
                      <label for="teleSpeakerNotesMissed">Speaker Missed</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                </div>
              </div>

            </div>

            <div class="col-12 col-sm-6 main-split m-top">
              <h3>Endgame</h3>
              <div class="row">
                <div class="col-6">

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="trapNotesScored" placeholder="Trap Scored">
                      <label for="trapNotesScored">Trap Scored</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="trapNotesMissed" placeholder="Trap Missed">
                      <label for="trapNotesMissed">Trap Missed</label>
                    </div>
                    <span class="input-group-text">+</span>
                  </div>

                </div>
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="climbType" id="climbType0" value="0">
                    <label class="form-check-label" for="climbType0">
                      Failed to Park
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="climbType" id="climbType1" value="1">
                    <label class="form-check-label" for="climbType1">
                      Parked
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="climbType" id="climbType2" value="2">
                    <label class="form-check-label" for="climbType2">
                      Climbed
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="climbType" id="climbType3" value="3">
                    <label class="form-check-label" for="climbType3">
                      Climbed w/ Buddy
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-3">
          <div class="row">

            <div class="col-12 col-sm-5 col-lg-3 mb-3">
              <div class="form-group" style="display: flex; flex-direction: column;">
                <label for="matchNum">Pickup Type(s)</label>
                <div class="btn-group btn-select-misc" role="group" aria-label="Basic checkbox toggle button group">
                  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                  <label class="btn text-light fw-medium btn-outline-secondary" for="btncheck1">Ground</label>

                  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                  <label class="btn text-light fw-medium btn-outline-secondary" for="btncheck2">Source</label>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-7 col-lg-5 mb-1">
              <div class="form-group" style="display: flex; flex-direction: column;">
                <label for="matchNum">Shot Location(s)</label>
                <div class="btn-group btn-select-misc" role="group" aria-label="Basic checkbox toggle button group">
                  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                  <label class="btn text-light fw-medium btn-outline-secondary" for="btncheck3">Subwoofer</label>

                  <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
                  <label class="btn text-light fw-medium btn-outline-secondary" for="btncheck4">Podium</label>

                  <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off">
                  <label class="btn text-light fw-medium btn-outline-secondary" for="btncheck5">Stage&nbsp;Leg</label>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-lg-4 mt-3 mb-3" style="align-items: center; justify-content: end; display: flex;">
              <button id="end-btn" type="button" class="btn btn-success" onclick="endMatch()">Submit Match ›</button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- USER -->
    <div class="modal fade" id="user" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg" style="overflow: scroll;">
        <div class="modal-content">
          <div class="modal-header" style="display: block;">
            <h1 class="modal-title fs-5 mb-1">Select a Profile</h1>
            <ul class="nav nav-pills">
              <li class="nav-item pr-1">
                <a id="peepFilter0" class="peep nav-link bg-light active" href="#" onclick="filterPeople(0);">Show all</a>
              </li>
              <li class="nav-item pr-1">
                <a id="peepFilter1" class="peep nav-link bg-light" href="#" onclick="filterPeople(1);">A - B</a>
              </li>
              <li class="nav-item pr-1">
                <a id="peepFilter2" class="peep nav-link bg-light" href="#" onclick="filterPeople(2);">C - G</a>
              </li>
              <li class="nav-item pr-1">
                <a id="peepFilter3" class="peep nav-link bg-light" href="#" onclick="filterPeople(3);">H - K</a>
              </li>
              <li class="nav-item pr-1">
                <a id="peepFilter4" class="peep nav-link bg-light" href="#" onclick="filterPeople(4);">L - R</a>
              </li>
              <li class="nav-item pr-1">
                <a id="peepFilter5" class="peep nav-link bg-light" href="#" onclick="filterPeople(5);">S - Y</a>
              </li>
            </ul>
          </div>
          <div class="modal-body" style="padding-top: 20px;">
            <div class="d-flex flex-wrap">
              <div class="person" data-uid="1734" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/bfca7e7bac49.jpg" /><p>Aaron Ng</p></div>
              <div class="person" data-uid="1730" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/831a9dd2b57e.jpg" /><p>Aastha Shukla</p></div>
              <div class="person" data-uid="1830" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/6f9972584fe1.jpg" /><p>Adi Athreya</p></div>
              <div class="person" data-uid="1724" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/6b5c3abe1df8.jpg" /><p>Adi Pokala</p></div>
              <div class="person" data-uid="1737" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/c736ab0ddd01.jpg" /><p>Adithya Bekkam</p></div>
              <div class="person" data-uid="1733" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/bb1fc7701957.jpg" /><p>Adrian Testino</p></div>
              <div class="person" data-uid="1788" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/d768afb82751.jpg" /><p>Agnes Koh</p></div>
              <div class="person" data-uid="1824" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/292c8e2f5068.jpg" /><p>Aleksey Trust</p></div>
              <div class="person" data-uid="1780" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/a84fe866063e.jpg" /><p>Alex DeBiasio</p></div>
              <div class="person" data-uid="1796" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/23f2ef733bdc.jpg" /><p>Alex Liptak</p></div>
              <div class="person" data-uid="1783" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/63f3766ab820.jpg" /><p>Anessa Ayaton</p></div>
              <div class="person" data-uid="1822" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1822.jpg" /><p>Anna Stieglitz</p></div>
              <div class="person" data-uid="1785" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1785.jpg" /><p>Art Allajbegu</p></div>
              <div class="person" data-uid="1786" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/ad227fc5f264.jpg" /><p>Aryan Shukla</p></div>
              <div class="person" data-uid="1837" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/120a7b04934c.jpg" /><p>Ashlyn Choi</p></div>
              <div class="person" data-uid="1726" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/0b8c6f4e84e2.jpg" /><p>Austin Sibley</p></div>
              <div class="person" data-uid="1820" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/18aaed6042d5.jpg" /><p>Ayan Swain</p></div>
              <div class="person" data-uid="1823" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1823.jpg" /><p>Ben Gulleyan</p></div>
              <div class="person" data-uid="1838" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/17e5ee05c617.jpg" /><p>Ben Smith</p></div>
              <div class="person" data-uid="1760" data-filter="1"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/776abab9756b.jpg" /><p>Benjamin Miller</p></div>
              <div class="person" data-uid="1827" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2a299b852ccf.jpg" /><p>Christina Samouhos</p></div>
              <div class="person" data-uid="1833" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/728088ee8361.jpg" /><p>Christine Yang</p></div>
              <div class="person" data-uid="1836" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/4559e06df50b.jpg" /><p>Ciara Leen</p></div>
              <div class="person" data-uid="1809" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/7f66aa64f028.jpg" /><p>Ciaran O&#039;brien</p></div>
              <div class="person" data-uid="1807" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/a697ee461379.jpg" /><p>Colin Hill</p></div>
              <div class="person" data-uid="1725" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/4f1746c30d6a.jpg" /><p>Danielle Stanchak</p></div>
              <div class="person" data-uid="1777" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/605c1d23aa67.jpg" /><p>Derek Zheng</p></div>
              <div class="person" data-uid="1793" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/13b6f65bd6b7.jpg" /><p>Dilan Patel</p></div>
              <div class="person" data-uid="1842" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/3fffd3cf602b.jpg" /><p>Doyun Rosie Kim</p></div>
              <div class="person" data-uid="1808" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/6b0cf204af72.jpg" /><p>Dylan Barrett</p></div>
              <div class="person" data-uid="1729" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/07c1f94cd209.jpg" /><p>Dylan Minneker</p></div>
              <div class="person" data-uid="1747" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/7bb30956c454.jpg" /><p>Eliza Krigsman</p></div>
              <div class="person" data-uid="1771" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2b645461c917.jpg" /><p>Emily Rottinger</p></div>
              <div class="person" data-uid="1718" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/ea78c784cf88.jpg" /><p>Estrella Luna</p></div>
              <div class="person" data-uid="1774" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/b7a6c5138488.jpg" /><p>Evan Minneker</p></div>
              <div class="person" data-uid="1805" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/7b0244d4ccd4.jpg" /><p>Gavin Sibley</p></div>
              <div class="person" data-uid="1806" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/662b87054cd8.jpg" /><p>Giovanni Godoy</p></div>
              <div class="person" data-uid="1758" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/3f357a871791.jpg" /><p>Giulia Disalvo</p></div>
              <div class="person" data-uid="1763" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2f4065c82541.jpg" /><p>Gowri Santhosh kumar rekha</p></div>
              <div class="person" data-uid="1759" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9b043bd760bb.jpg" /><p>Grant Bancroft</p></div>
              <!--<div class="person" data-uid="1853" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9b043bd760bb.jpg" /><p>Grant Bancroft</p></div>-->
              <div class="person" data-uid="1721" data-filter="2"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/7ca1043697c1.jpg" /><p>Grant Linardic</p></div>
              <div class="person" data-uid="1834" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/b121928f6774.jpg" /><p>Hugh Gorman</p></div>
              <div class="person" data-uid="1791" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1791.jpg" /><p>Hyunjun Lim</p></div>
              <div class="person" data-uid="1708" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/cfcbfc4cf74f.jpg" /><p>Jake Depaolo</p></div>
              <div class="person" data-uid="1844" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/b8354c23aeed.jpg" /><p>Jason Schwartz</p></div>
              <div class="person" data-uid="1849" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9b4623631831.jpg" /><p>Jessica Ruderman</p></div>
              <div class="person" data-uid="1755" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/4315937ccd19.jpg" /><p>John Murno</p></div>
              <div class="person" data-uid="1850" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1850.jpg" /><p>Joohee Yoon</p></div>
              <div class="person" data-uid="1804" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2fd954b4b620.jpg" /><p>Joseph Ye</p></div>
              <div class="person" data-uid="1792" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/8563c2def852.jpg" /><p>Josh Baskin</p></div>
              <div class="person" data-uid="1754" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/383fd38d15a6.jpg" /><p>Julian Guggino</p></div>
              <div class="person" data-uid="1819" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/509fc248fee6.jpg" /><p>Justin Yoo</p></div>
              <div class="person" data-uid="1712" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/5394179f5841.jpg" /><p>Kareena Shah</p></div>
              <div class="person" data-uid="1835" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/3639bea39eb6.jpg" /><p>Karyn Hill</p></div>
              <div class="person" data-uid="1776" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/84e1fb8a9ca5.jpg" /><p>Kenneth Ang</p></div>
              <div class="person" data-uid="1825" data-filter="3"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/8df3b85582f7.jpg" /><p>Kirill Zhukau</p></div>
              <div class="person" data-uid="1787" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9cb1789b821c.jpg" /><p>Leisha Bhosle</p></div>
              <div class="person" data-uid="1794" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/13b617bef782.jpg" /><p>Logan Caplinger</p></div>
              <div class="person" data-uid="1761" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/a50170adc0fd.jpg" /><p>Matthew Sheehan</p></div>
              <div class="person" data-uid="1719" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/83c93aab81f4.jpg" /><p>Max Dryerman</p></div>
              <div class="person" data-uid="1775" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9fcdf3235e91.jpg" /><p>Meher Baath</p></div>
              <div class="person" data-uid="1803" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/db041e29388b.jpg" /><p>Michael Tedesco</p></div>
              <div class="person" data-uid="1711" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/bf5d7713fa71.jpg" /><p>Minche Kim</p></div>
              <div class="person" data-uid="1743" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2f642c4e5416.jpg" /><p>Ming-lang Qin</p></div>
              <div class="person" data-uid="1716" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/c1920a78f2af.jpg" /><p>Nathan Prins</p></div>
              <div class="person" data-uid="1753" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/affe2dad862b.jpg" /><p>Nathaniel Veit</p></div>
              <div class="person" data-uid="1782" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/0fb69c96abc0.jpg" /><p>Navdeep Bhalla</p></div>
              <div class="person" data-uid="1769" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9b5b40ad1c1b.jpg" /><p>Neel Tripuraneni</p></div>
              <div class="person" data-uid="1821" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1821.jpg" /><p>Olivia Nixon</p></div>
              <div class="person" data-uid="1841" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/bdd01b432729.jpg" /><p>Olivia Pampliega</p></div>
              <div class="person" data-uid="1795" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/e241e7ee97dc.jpg" /><p>Raymond Yoo</p></div>
              <div class="person" data-uid="1731" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/ef6209268538.jpg" /><p>RJ Kennedy</p></div>
              <div class="person" data-uid="1762" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/7f7a4682b166.jpg" /><p>Robyn Song</p></div>
              <div class="person" data-uid="1710" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/eb87ab1d4ef7.jpg" /><p>Roy Yoo</p></div>
              <div class="person" data-uid="1800" data-filter="4"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/09a9820a770c.jpg" /><p>Ryan Schwartz</p></div>
              <div class="person" data-uid="1749" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/f3e97489d2be.jpg" /><p>Sawyer Mercier</p></div>
              <div class="person" data-uid="1801" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/995a7a101789.jpg" /><p>Sean O&#039;neill</p></div>
              <div class="person" data-uid="1772" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9ba84fe3c58c.jpg" /><p>Sebastian Yaverian</p></div>
              <div class="person" data-uid="1856" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1856.jpg" /><p>Snehanshn Chowdhury</p></div>
              <div class="person" data-uid="1756" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2c393268d568.jpg" /><p>Sonny Drozd</p></div>
              <!--<div class="person" data-uid="1855" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/4ff944202e93.jpg" /><p>Sonny Drozd</p></div>-->
              <div class="person" data-uid="1765" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/9789fa626cd0.jpg" /><p>Suhani Mahale</p></div>
              <div class="person" data-uid="1810" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2f7db5a48873.jpg" /><p>Suzanna Kalishman</p></div>
              <div class="person" data-uid="1768" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/8686207e80aa.jpg" /><p>Thomas Rottinger</p></div>
              <div class="person" data-uid="1829" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1829.jpg" /><p>Thomas Samouhos</p></div>
              <div class="person" data-uid="1715" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/f91bb3b51a6d.jpg" /><p>Treshan Nilaweera</p></div>
              <div class="person" data-uid="1797" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/435b98dd33c6.jpg" /><p>Triyana Nilaweera</p></div>
              <div class="person" data-uid="1789" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1789.jpg" /><p>Tyler Minneker</p></div>
              <div class="person" data-uid="1843" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/f0b86255c5d6.jpg" /><p>Tyler Seferian</p></div>
              <div class="person" data-uid="1736" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/2b9df4a8f308.jpg" /><p>Ulysses Minaya</p></div>
              <div class="person" data-uid="1831" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/f44d951d99e4.jpg" /><p>Victor Urumov</p></div>
              <div class="person" data-uid="1781" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/fb601c88dbe3.jpg" /><p>Vincent Wang</p></div>
              <div class="person" data-uid="1740" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/0312bd3de6f8.jpg" /><p>William Bramley</p></div>
              <div class="person" data-uid="1839" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1839.jpg" /><p>William Hill</p></div>
              <div class="person" data-uid="1784" data-filter="5"><img loading="lazy" alt="profile_image" src="assets/img/profiles/200/goog1784.jpg" /><p>Yushin Cho</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /USER -->


    <!-- TIMEOUT -->
    <div class="modal fade" id="timeout" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Timeout</h1>
          </div>
          <div class="modal-body">
            <p>It's been 20 seconds since your robot moved.</p>
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="resetTimeout()">Robot Stopped</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-warning" data-dismiss="modal" onclick="resetTimeout()">Being Defended</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-info" data-dismiss="modal" onclick="resetTimeout()">Robot is Defender</button>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-dark" data-dismiss="modal" style="width: 100%;">Go away!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /TIMEOUT -->


    <!-- HELP -->
    <div class="modal fade" id="help" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Instructions</h1>
          </div>
          <div class="modal-body">
            <button type="button" class="btn btn-success" onclick="setLocalStorage('c', 'abc')">Set LocalStorage</button>
            <button type="button" class="btn btn-primary" onclick="fetchLocalStorage('c')">Fetch LocalStorage</button>
            <div id="whatIfetched"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /HELP -->


    <!-- JavaScript -->

    <script type="text/javascript" src="assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/popper.min.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.v5.3.2.js"></script>
    <!-- <script type="text/javascript" src="assets/js/bootstrap.v4.5.2.js"></script> -->
    <!-- <script type="text/javascript" src="assets/js/qrcode.min.js"></script> -->
    <script type="text/javascript" src="assets/js/p5.min.js"></script>

    <script type="text/javascript" src="scripts.js"></script>
    <!-- <script type="text/javascript" src="scanner.js"></script> -->

  </body>
</html>
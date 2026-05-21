$ErrorActionPreference = "Stop"
$base = "C:\PRANAV\VS Code\Boostmysites\New Subscribers\dilli - linkai\src\assets\images"
$w = "1200"

function Get-Unsplash($id) { "https://images.unsplash.com/${id}?auto=format&fit=crop&w=$w&q=85" }

# Themed Unsplash photo IDs (sky-blue / professional tech)
$pools = @{
  healthcare = @(
    "photo-1576091160550-2173dba999ef","photo-1579684385127-1ef15d508118",
    "photo-1581595220892-b0739fda3b71","photo-1538108149394-2174fbfcc92e",
    "photo-1666214280557-f9939a1fbf41","photo-1579154204601-01521f780c8e"
  )
  team = @(
    "photo-1552664730-d307ca884978","photo-1522071820081-009f0129c71c",
    "photo-1600880292203-757bb62b4fae","photo-1529156069898-49953e39b3ac",
    "photo-1556761175-5973dc0d32db"
  )
  coding = @(
    "photo-1498050108023-c5249f4df085","photo-1460925895917-afeab8c859f1",
    "photo-1555066931-4365d14bab8c","photo-1504639725590-34d0981948ad",
    "photo-1517694712202-14dd9538a904","photo-1531482615713-2afd69097998"
  )
  ai = @(
    "photo-1677442136019-21780ecad995","photo-1620712943543-bcc4688e7485",
    "photo-1485827404703-89b55fcc595e","photo-1535378917042-9a0c8e8f4c4f"
  )
  mobile = @(
    "photo-1512941963327-753300b1dac2","photo-1556656793-08538906a9f8",
    "photo-1432888498266-38ffec3eaf0a","photo-1551650972-87ceaeb16c4b"
  )
  data = @(
    "photo-1551288049-bebda4e38f71","photo-1551288049-bebda4e38f71",
    "photo-1460925895917-afeab8c859f1","photo-1504868584819-f8e8b4b6d7e3"
  )
  design = @(
    "photo-1561070791-2526d30994b5","photo-1586717791851-3f0c8beacb7b",
    "photo-1581291518857-4e27b48ff24e","photo-1558655146-d09347e92766"
  )
  gaming = @(
    "photo-1542751371-adc38448a05e","photo-1511512636226-92d117814db4",
    "photo-1493711662062-fa541adb3fc8"
  )
  ecommerce = @(
    "photo-1556742049-0cfed4f6a45d","photo-1472851294608-062f824d81cc",
    "photo-1563013544-824ae1b704d3"
  )
  support = @(
    "photo-1553877522-43269d4ea984","photo-1423666639041-f56000c27a9f",
    "photo-1556761175-5973dc0d32db"
  )
  partnership = @(
    "photo-1521791136064-7986c2920216","photo-1560250097-0b93528c311a",
    "photo-1600880292203-757bb62b4fae"
  )
  innovation = @(
    "photo-1454165804606-c3d57bc86b40","photo-1523240795612-9a054b0db644",
    "photo-1451187580459-43490279c0fa"
  )
  blog = @(
    "photo-1516321318423-f06f85e504b3","photo-1432888498266-38ffec3eaf0a",
    "photo-1456324504439-367cee3d3cca","photo-1504384308090-c894fdcc538d"
  )
  hero = @(
    "photo-1451187580459-43490279c0fa","photo-1550751827-4bd374c3f58b",
    "photo-1518770660439-4636190af475"
  )
}

function Pick-Url($poolName, $key) {
  $arr = $pools[$poolName]
  $idx = [Math]::Abs($key.GetHashCode()) % $arr.Length
  Get-Unsplash $arr[$idx]
}

function Download-File($outPath, $url) {
  $dir = Split-Path $outPath -Parent
  if ($dir -and !(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  try {
    Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
    return $true
  } catch {
    Write-Warning "FAIL $outPath : $($_.Exception.Message)"
    return $false
  }
}

# --- Root images (semantic mapping) ---
$rootMap = @{
  "our-story.png" = Pick-Url "innovation" "our-story"
  "client-engagement-and-support.png" = Pick-Url "support" "client-engagement"
  "ongoing-support.png" = Pick-Url "coding" "ongoing-support"
  "Partnership Beyond Projects.png" = Pick-Url "partnership" "partnership"
  "contact.png" = Pick-Url "support" "contact"
  "cta-img.png" = Pick-Url "team" "cta-img"
  "cta-img-avatars.png" = Pick-Url "team" "cta-avatars"
  "faq.jpeg" = Pick-Url "innovation" "faq"
  "banner.jpg" = Pick-Url "hero" "banner"
  "about.png" = Pick-Url "healthcare" "about"
  "about1.png" = Pick-Url "coding" "about1"
  "Quality First.jpeg" = Pick-Url "team" "quality-first"
}

# --- Landing page ---
$landingMap = @{
  "Custom Website Design.jpg" = Pick-Url "design" "custom-web"
  "E-commerce Solutions.jpg" = Pick-Url "ecommerce" "ecommerce"
  "Content Management Systems.jpg" = Pick-Url "coding" "cms"
  "API Integration.jpg" = Pick-Url "coding" "api"
  "Website Maintenance & Support.jpg" = Pick-Url "support" "maintenance"
  "iOS App Development.jpg" = Pick-Url "mobile" "ios"
  "Android App Development.jpg" = Pick-Url "mobile" "android"
  "Cross-Platform App Development.jpg" = Pick-Url "mobile" "cross-platform"
  "UIUX Design for Apps.jpg" = Pick-Url "design" "uiux-apps"
  "App Testing & Deployment.jpg" = Pick-Url "coding" "app-testing"
  "web-about.jpg" = Pick-Url "coding" "web-about"
  "app-about.png" = Pick-Url "mobile" "app-about"
}

# --- Blogs ---
$blogMap = @{
  "healthcare\1.jpg" = Pick-Url "healthcare" "hc1"
  "healthcare\2.jpg" = Pick-Url "healthcare" "hc2"
  "healthcare\3.jpg" = Pick-Url "healthcare" "hc3"
  "other\1.jpg" = Pick-Url "ai" "other1"
  "other\2.jpg" = Pick-Url "coding" "other2"
  "other\3.jpg" = Pick-Url "data" "other3"
}

# --- Services category defaults ---
$serviceCategory = @{
  "web-dev" = "coding"
  "app-dev" = "mobile"
  "ai" = "ai"
  "custom-software" = "coding"
  "data-science" = "data"
  "game-dev" = "gaming"
  "uiux" = "design"
}

$serviceRoot = @{
  "web-dev1.jpeg" = "coding"
  "app-dev1.jpeg" = "mobile"
  "custom-software1.jpeg" = "coding"
  "ai1.png" = "ai"
  "data-science1.jpeg" = "data"
  "game-dev1.jpeg" = "gaming"
  "uiux1.jpeg" = "design"
}

$ok = 0; $fail = 0

Write-Host "=== Root images ==="
foreach ($entry in $rootMap.GetEnumerator()) {
  $path = Join-Path $base $entry.Key
  if (Download-File $path $entry.Value) { $ok++ } else { $fail++ }
  Write-Host "  $($entry.Key)"
}

Write-Host "`n=== Landing page ==="
$landingDir = Join-Path $base "landing page"
foreach ($entry in $landingMap.GetEnumerator()) {
  $path = Join-Path $landingDir $entry.Key
  if (Download-File $path $entry.Value) { $ok++ } else { $fail++ }
  Write-Host "  $($entry.Key)"
}

Write-Host "`n=== Blogs ==="
$blogsDir = Join-Path $base "blogs"
foreach ($entry in $blogMap.GetEnumerator()) {
  $path = Join-Path $blogsDir $entry.Key
  if (Download-File $path $entry.Value) { $ok++ } else { $fail++ }
  Write-Host "  $($entry.Key)"
}

Write-Host "`n=== Services ==="
$servicesDir = Join-Path $base "services"
$serviceFiles = @(
  "ai1.png","app-dev1.jpeg","custom-software1.jpeg","data-science1.jpeg","game-dev1.jpeg","uiux1.jpeg","web-dev1.jpeg",
  "ai\1.png","ai\2.jpeg","ai\banner.jpeg","ai\expertise1.jpeg","ai\expertise2.jpeg","ai\expertise3.jpeg","ai\expertise4.jpeg","ai\expertise5.jpeg","ai\expertise6.jpeg","ai\expertise7.png","ai\expertise8.jpeg","ai\process1.jpeg","ai\process2.jpeg","ai\process3.jpeg",
  "app-dev\1.jpeg","app-dev\2.jpeg","app-dev\banner.jpeg","app-dev\expertise1.jpeg","app-dev\expertise2.jpeg","app-dev\expertise3.jpeg","app-dev\expertise4.png","app-dev\expertise5.png","app-dev\expertise6.jpeg","app-dev\expertise7.jpeg","app-dev\expertise8.jpeg","app-dev\expertise9.jpeg","app-dev\expertise10.jpeg","app-dev\expertise11.jpeg","app-dev\expertise12.jpeg","app-dev\expertise13.jpeg","app-dev\process1.jpeg","app-dev\process2.jpeg","app-dev\process3.jpeg",
  "custom-software\1.jpeg","custom-software\2.png","custom-software\banner.jpeg","custom-software\expertise1.png","custom-software\expertise2.jpeg","custom-software\expertise3.jpeg","custom-software\expertise4.jpeg","custom-software\expertise5.jpeg","custom-software\expertise6.jpeg","custom-software\process1.jpeg","custom-software\process2.jpeg","custom-software\process3.jpeg",
  "data-science\1.png","data-science\2.jpeg","data-science\banner.jpeg","data-science\expertise1.jpeg","data-science\expertise2.jpeg","data-science\expertise3.jpeg","data-science\expertise4.jpeg","data-science\expertise5.jpeg","data-science\expertise6.jpeg","data-science\expertise7.jpeg","data-science\expertise8.jpeg","data-science\process1.jpeg","data-science\process2.jpeg","data-science\process3.jpeg",
  "game-dev\1.jpeg","game-dev\2.jpeg","game-dev\banner.jpeg","game-dev\expertise1.jpeg","game-dev\expertise2.jpeg","game-dev\expertise3.jpeg","game-dev\expertise4.jpeg","game-dev\expertise5.jpeg","game-dev\expertise6.jpeg","game-dev\expertise7.jpeg","game-dev\expertise8.jpeg","game-dev\expertise9.jpeg","game-dev\expertise10.jpeg","game-dev\process1.jpeg","game-dev\process2.jpeg","game-dev\process3.jpeg",
  "uiux\1.jpeg","uiux\2.jpeg","uiux\banner.jpeg","uiux\expertise1.jpeg","uiux\expertise2.jpeg","uiux\expertise3.jpeg","uiux\expertise4.jpeg","uiux\expertise5.jpeg","uiux\expertise6.jpeg","uiux\expertise7.png","uiux\expertise8.jpeg","uiux\expertise9.jpeg","uiux\process1.jpeg","uiux\process2.jpeg","uiux\process3.jpeg",
  "web-dev\1.jpeg","web-dev\2.jpeg","web-dev\banner.jpeg","web-dev\expertise1.png","web-dev\expertise2.jpeg","web-dev\expertise3.jpeg","web-dev\expertise4.jpeg","web-dev\expertise5.jpeg","web-dev\process1.jpeg","web-dev\process2.jpeg","web-dev\process3.jpeg"
)

foreach ($rel in $serviceFiles) {
  $fileName = Split-Path $rel -Leaf
  $cat = ($rel -split '\\')[0]
  if ($serviceRoot.ContainsKey($fileName)) {
    $pool = $serviceRoot[$fileName]
  } elseif ($serviceCategory.ContainsKey($cat)) {
    $pool = $serviceCategory[$cat]
    if ($fileName -match 'banner') { $pool = "hero" }
    elseif ($fileName -match 'process') { $pool = "team" }
  } else {
    $pool = "coding"
  }
  $outPath = Join-Path $servicesDir $rel
  $url = Pick-Url $pool $rel
  if (Download-File $outPath $url) { $ok++ } else { $fail++ }
}
Write-Host "  $($serviceFiles.Count) service files"

Write-Host "`nDone: $ok succeeded, $fail failed"

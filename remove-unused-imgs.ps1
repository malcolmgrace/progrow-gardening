# remove-unused-imgs.ps1
# Deletes image files not referenced in any HTML page across the ProGrow site.
# Usage: .\remove-unused-imgs.ps1
# Run from your site root (e.g. C:\git\progrow-gardening)

$imgDir = "img"

$files = @(
    "$imgDir\ProGrow_Logo_Green.png"
    "$imgDir\ProGrow_Logo_Green.webp"
    "$imgDir\ProGrow_Logo_White.webp"
    "$imgDir\carousel-quote-page.webp"
    "$imgDir\customer-review-pic-1.webp"
    "$imgDir\customer-review-pic-2.webp"
    "$imgDir\customer-review-pic-3.png"
    "$imgDir\customer-review-pic-3.webp"
    "$imgDir\favicon.webp"
    "$imgDir\gallery-pic-4-1400w.webp"
    "$imgDir\gallery-pic-4-800w.webp"
    "$imgDir\gallery-pic-5.jpg"
    "$imgDir\gallery-pic-6-1400w.webp"
    "$imgDir\gallery-pic-6-800w.webp"
    "$imgDir\gallery-pic-7-1400w.webp"
    "$imgDir\gallery-pic-7-800w.webp"
    "$imgDir\gallery-pic-7.jpeg"
    "$imgDir\gallery-pic-8.JPG"
    "$imgDir\garden_maintenance.jpg"
    "$imgDir\garden_maintenance.webp"
    "$imgDir\gardeningcarousel.webp"
    "$imgDir\google-reviews-logo.png"
    "$imgDir\google-reviews-logo.webp"
    "$imgDir\icon\icon-2.png"
    "$imgDir\icon\icon-3.png"
    "$imgDir\icon\icon-9.png"
    "$imgDir\icon\icon-10.png"
)

$deleted = 0
$missing = 0

foreach ($f in $files) {
    if (Test-Path $f) {
        Remove-Item $f
        Write-Host "Deleted: $f"
        $deleted++
    } else {
        Write-Host "Not found (skipped): $f"
        $missing++
    }
}

Write-Host ""
Write-Host "Done. $deleted file(s) deleted, $missing not found."

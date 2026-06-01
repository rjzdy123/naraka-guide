$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$targets = @(
    @{Url="https://images.wallpaperscraft.com/image/single/naraka_bladepoint_warrior_192689_1920x1080.jpg"; Dest="F:\ai\wjwjdwz\assets\hero-bg.jpg"},
    @{Url="https://w.wallhaven.cc/full/y8/wallhaven-y82d7k.jpg"; Dest="F:\ai\wjwjdwz\assets\hero-bg-2.jpg"}
)

foreach ($t in $targets) {
    Write-Host "Trying: $($t.Url)"
    try {
        $wc.DownloadFile($t.Url, $t.Dest)
        $size = (Get-Item $t.Dest).Length
        if ($size -gt 50000) {
            Write-Host "SUCCESS: $($t.Dest) - $size bytes"
        } else {
            Write-Host "TOO SMALL: $size bytes, deleting"
            Remove-Item $t.Dest -Force
        }
    } catch {
        Write-Host "FAILED: $_"
    }
}
Write-Host "Done. Press any key..."
Read-Host

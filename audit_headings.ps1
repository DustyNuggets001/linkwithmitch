$htmlFiles = Get-ChildItem -Path . -Filter "*.html" -Recurse | Where-Object { $_.FullName -notmatch "includes|partials" -and -not $_.Name.StartsWith("_") } | Sort-Object FullName

$report = @()
$report += "=" * 80
$report += "HEADING STRUCTURE AUDIT REPORT"
$report += "Generated: 2026-01-09"
$report += "=" * 80
$report += ""

$perfectPages = @()
$problematicPages = @()

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Extract all heading tags
    $headings = [regex]::Matches($content, "<(h[1-6])[^>]*>(.*?)</`$1>", "IgnoreCase,Singleline")
    
    $headingList = @()
    foreach ($match in $headings) {
        $tag = $match.Groups[1].Value.ToUpper()
        $text = $match.Groups[2].Value -replace "<[^>]+>", "" -replace "\s+", " "
        $text = $text.Trim()
        $headingList += @{ Tag = $tag; Text = $text }
    }
    
    # Analyze for issues
    $issues = @()
    
    if ($headingList.Count -eq 0) {
        $issues += "No headings found"
    }
    
    # Count H1 tags
    $h1Count = ($headingList | Where-Object { $_.Tag -eq "H1" }).Count
    if ($h1Count -eq 0 -and $headingList.Count -gt 0) {
        $issues += "Missing H1 tag"
    } elseif ($h1Count -gt 1) {
        $issues += "Multiple H1 tags found ($h1Count)"
    }
    
    # Check for heading skips
    $prevLevel = 0
    for ($i = 0; $i -lt $headingList.Count; $i++) {
        $currentLevel = [int]$headingList[$i].Tag.Substring(1)
        
        if ($prevLevel -gt 0 -and $currentLevel -gt $prevLevel + 1) {
            $issues += "Heading skip: H$prevLevel -> H$currentLevel (skipped H$($prevLevel + 1))"
        }
        
        $prevLevel = $currentLevel
    }
    
    # Store results
    $relPath = $file.FullName.Replace((Get-Location).Path, ".").Replace("\", "/")
    
    if ($issues.Count -eq 0) {
        $perfectPages += $relPath
    } else {
        $problematicPages += @{
            File = $relPath
            Headings = $headingList
            Issues = $issues
        }
    }
}

# Generate summary
$report += "SUMMARY:"
$report += "Total pages analyzed: $($htmlFiles.Count)"
$report += "Pages with perfect hierarchy: $($perfectPages.Count)"
$report += "Pages with issues: $($problematicPages.Count)"
$report += ""
$report += "=" * 80

# Perfect pages
if ($perfectPages.Count -gt 0) {
    $report += ""
    $report += "PAGES WITH PERFECT HEADING HIERARCHY:"
    $report += "-" * 80
    foreach ($page in $perfectPages) {
        $report += "  OK $page"
    }
    $report += ""
}

# Problematic pages
if ($problematicPages.Count -gt 0) {
    $report += ""
    $report += "PAGES WITH ISSUES:"
    $report += "=" * 80
    
    foreach ($pageInfo in $problematicPages) {
        $report += ""
        $report += "FILE: $($pageInfo.File)"
        $report += "-" * 80
        
        if ($pageInfo.Issues.Count -gt 0) {
            $report += "ISSUES:"
            foreach ($issue in $pageInfo.Issues) {
                $report += "  X $issue"
            }
            $report += ""
        }
        
        if ($pageInfo.Headings.Count -gt 0) {
            $report += "HEADING STRUCTURE:"
            $num = 1
            foreach ($heading in $pageInfo.Headings) {
                $level = [int]$heading.Tag.Substring(1)
                $indent = "  " * ($level - 1)
                $text = $heading.Text
                if ($text.Length -gt 70) {
                    $text = $text.Substring(0, 70) + "..."
                }
                $report += "  $num. $indent$($heading.Tag): $text"
                $num++
            }
        } else {
            $report += "  (No headings found)"
        }
        
        $report += ""
    }
}

$report += "=" * 80
$report += "END OF REPORT"
$report += "=" * 80

# Write to file
$report | Out-File -FilePath "HEADING_AUDIT_RESULTS.txt" -Encoding UTF8

Write-Host "Audit complete! Results written to HEADING_AUDIT_RESULTS.txt"
Write-Host ""
Write-Host "Quick Summary:"
Write-Host "  Perfect pages: $($perfectPages.Count)"
Write-Host "  Pages with issues: $($problematicPages.Count)"

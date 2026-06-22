import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/HUANUO-Dual-Monitor-Stand-Adjustable/dp/B07T5SY43L?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=ff781f33fbc87be58375fa9681b7b639&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ErGear-Adjustable-Tool-Free-Management-100x100mm/dp/B0FQM6QB48?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=44638eb89942643a0b9e3f7070f65d65&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Single-Monitor-Mount-Articulating-Adjustable/dp/B07T3KCQ94?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=d2d75787c1485e3c464767efab6b7a12&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/VIVO-Monitor-Adjustable-Screens-STAND-V002/dp/B009S750LA?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=a57a9e307e181ecbcdff12a6f0a71324&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BESIGN-Aluminum-Ergonomic-Detachable-Compatible/dp/B08BRCT4JH?&linkCode=ll2&tag=deskcraftdail-20&linkId=975e1a848faef64930862add74b1ebae&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Adjustable-Silicone-Foldable-Ventilated-Tablet-Black/dp/B08G84P8ZX?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=f4817df85fa07ff38fb715516a78e82e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BestOffice-Ergonomic-Office-Chair-Breathable/dp/B0FQDM23S4?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=11d7edc7cc65036939477a331c28698b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TRALT-Office-Chair-Adjustable-Comfortable/dp/B0CQD3K8PJ?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=4a7d5459be0ae0eeb3e889485c3414b2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NEO-Computer-Ergonomic-Support-Adjustable/dp/B0FJW7M21Q?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=1d7c0d9b7af4116b9106bbc983ae9388&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TRALT-Office-Ergonomic-Chairs-Comfortable/dp/B0CG6V2XGS?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=b3b96e5606e439c1faa6b871d6c70348&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NEO-CHAIR-Chair-Mesh-Adjustable/dp/B0FXGB6L96?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=3d1363eb507ba6d0163366e4deb1cb92&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Marsail-Ergonomic-Office-Chair-Adjustable/dp/B0CP22DQQS?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=0c7286c98cfaa69c8b76a8f73fec035f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ErGear-Adjustable-Electric-Standing-Computer/dp/B0B41YH9B6?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=d50b17a08f950adae169c716379937ff&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Veken-Electric-Standing-Adjustable-Computer/dp/B0DWMNPW7D?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=eb698c36e6aadb127acaae0b98f644bb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/DUMOS-Electric-Standing-Adjustable-Workstations/dp/B0G3X3ZSK4?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=b825331546bc393d5da94d1989a52224&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Claiks-Electric-Standing-Adjustable-Height/dp/B0BZ7GXM4M?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=13e41b23e209f21edfa879633fec9f5f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FEZIBO-Standing-Electric-Adjustable-Computer/dp/B0F8MHPVPH?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=eae9e738bc05ed2907961c18d5811686&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/VIVO-Adjustable-Workstation-Controller-DESK-KIT-1B6B/dp/B07V6ZSHF4?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=909f8ec4fae78edaf5415fce7f86381c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Multiple-Splitter-Laptop-Extender-Windows/dp/B0CN3F9Y1Z?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=ecec45fe437a48b6e5f118ba2e4f363a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Anker-Transfer-Ultra-Slim-Charging-Supported/dp/B07L32B9C2?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=4e28158432f5e4714b85540d5b1c303b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Anker-Display-MacBook-Thinkpad-Laptops/dp/B0BQLLB61B?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=95124c2cef3147623350f4e6e98a759a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Anker-PowerExpand-Adapter-Delivery-Ethernet/dp/B0874M3KW4?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=f1bcaea4e321b4eaaee9759e76a4fa7d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Docking-Station-Monitors-Thunderbolt-Ethernet/dp/B0CRDHM89Y?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=4a00d381670d18923587b912fbe9cb13&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Docking-Station-Monitor-Charging-Compatible/dp/B0DW85W3FV?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=f8b576db4a91d862dd64d40d2d693e22&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/soundcore-Cancelling-Headphones-Bluetooth-Transparency/dp/B0C3HCD34R?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=4d444e394920c600a739186c82675129&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0C8PR4W22?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=08f4a979b2c3a6117b9c06094e164f8b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BERIBES-Bluetooth-Headphones-Microphone-Lightweight/dp/B09LYF2ST7?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=36fefd4ea1e1ce15d02484f123fd7c3e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JBL-TUNE-720BT-Lightweight-comfortable/dp/B0CTBCDD6D?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=74078f1ac372fe308255bd5e95c6c9b7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JLab-Headphones-Cancelling-Customizable-Compatible/dp/B0CRM4Q1W1?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=69b0720290eeb0df6e21d573b0cf4d63&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bluetooth-Headphones-KVIDIO-Microphone-Lightweight/dp/B09BF64J55?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=db10510d375bfbe90a7ef0546aa47082&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wireless-Keyboard-Full-Sized-Adjustable-Receiver/dp/B0DDT75R2R?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=beaa0ae4c0a968d0330e60fb2a0d1dbc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wireless-Keyboard-Ergonomic-Lag-Free-Cordless/dp/B0DLBD36HL?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=d8fb9bebd06dd893d991219ff6b8b64d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wireless-Keyboard-MARVO-Ergonomic-Compatible/dp/B09P33RWFJ?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=9cd4963fbec3c5022a486c48a1e5f113&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wireless-Keyboard-Ergonomic-3-Level-Adjustable/dp/B0DX791FXY?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=97cb00673f577f59f98d543929e1d078&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Logitech-13004-MK335/dp/B072JX77X6?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=8ab9323cbdbdb19ce1a7c459eb7bfd54&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Logitech-MK270-Wireless-Keyboard-Mouse/dp/B079JLY5M5?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=5c56661646c5ab1512380d52b8729c87&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/gianotter-Organizer-Accessories-Workspace-Organizers/dp/B0BWTT3WK1?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=ae255637a807a755c74853b33db113da&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OPNICE-Organizers-Accessories-Workspace-Organizer/dp/B0BYDGF8DT?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=aee64fe59bb37875d3cf1be2d2ea8baa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Holder-Organizers-Pencil-Compartments-Organizer/dp/B0CQP9LYXC?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=25f881abbbb2f54b44f59bedc769f88a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/WALI-Organizer-Accessories-Organizers-DO005DH-B/dp/B0GN1TZZ9W?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=f6b47a60916911576a80248e233e6971&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Amazon-Basics-Mesh-Pen-Holder/dp/B08VP72ZNS?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=396afa6bfb2ffbe8e412c1a1caf03155&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Simple-Trending-Organizer-Vertical-Document/dp/B07R7FZ6RG?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=04f71729a35a358e10f0bda1e0df3935&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Blocking-Glasses-Computer-Reading-Eyestrain/dp/B07W781XWF?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=2f5dc76f5d0054aa2d15f269430cec94&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gaoye-Blocking-Computer-Eyeglasses-Transparent/dp/B085XGKBDT?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=606b076b7f0a6839826b7983c55d0d58&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Blue-Light-Blocking-Glasses-Eyeglasses/dp/B0D9HRSR11?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=0e42413f250dd0955e2b9228fea4e42f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gaoye-Blue-Light-Blocking-Glasses/dp/B0CY8Q76LT?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=1df6db4f45591739ebd60596e03d2527&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Oilway-Blue-Light-Blocking-Computer-Eyestrain/dp/B0B2R4NR2F?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=85155d8bb095f4486fdc4186a6bd7009&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TIJN-Blocking-Coatings-Computer-Eyestrain/dp/B0DHGMBZ36?th=1&linkCode=ll2&tag=deskcraftdail-20&linkId=fcb19715c56a2aa55883013ea00320c4&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'deskcraft'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];

      // Сохраняем utm_source
      const params = new URLSearchParams(url.search);
      const targetUrl = randomUrl 
   

      // === Вместо прямого редиректа возвращаем HTML-страницу ===
      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          // Важно: разрешаем передачу полного referrer
          'Referrer-Policy': 'no-referrer-when-downgrade',
          // Можно добавить Cache-Control, чтобы не кэшировалось
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      // Удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}


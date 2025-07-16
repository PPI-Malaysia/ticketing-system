<?php
// Sample events data - in a real application, this would come from a database
$events = [
    [
        'id' => 1,
        'name' => 'Coldplay - Jakarta',
        'date' => '2024-11-15',
        'time' => '20:00',
        'venue' => 'Gelora Bung Karno Stadium',
        'location' => 'Jakarta',
        'category' => 'concert',
        'startingPrice' => 2975000,
        'availableTickets' => 150,
        'image' => 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'type' => 'event',
        'description' => 'Experience the magic of Coldplay live in Jakarta! Don\'t miss this once-in-a-lifetime concert featuring all their greatest hits.',
        'ticketTypes' => [
            ['name' => 'General Admission', 'price' => 2975000, 'available' => 50],
            ['name' => 'VIP', 'price' => 5500000, 'available' => 25],
            ['name' => 'VVIP', 'price' => 8500000, 'available' => 15]
        ]
    ],
    [
        'id' => 2,
        'name' => 'Ed Sheeran - Surabaya',
        'date' => '2024-12-02',
        'time' => '19:30',
        'venue' => 'Gelora Bung Tomo Stadium',
        'location' => 'Surabaya',
        'category' => 'concert',
        'startingPrice' => 1250000,
        'availableTickets' => 75,
        'image' => 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'type' => 'event',
        'description' => 'Join Ed Sheeran for an intimate acoustic performance in Surabaya. Experience his beautiful melodies and heartfelt lyrics.',
        'ticketTypes' => [
            ['name' => 'General Admission', 'price' => 1250000, 'available' => 40],
            ['name' => 'VIP', 'price' => 2500000, 'available' => 20],
            ['name' => 'VVIP', 'price' => 4000000, 'available' => 15]
        ]
    ],
    [
        'id' => 3,
        'name' => 'Java Jazz Festival',
        'date' => '2024-12-15',
        'time' => '18:00',
        'venue' => 'Jakarta International Expo',
        'location' => 'Jakarta',
        'category' => 'festival',
        'startingPrice' => 850000,
        'availableTickets' => 200,
        'image' => 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'type' => 'event',
        'description' => 'The biggest jazz festival in Southeast Asia featuring international and local jazz artists.',
        'ticketTypes' => [
            ['name' => 'Day Pass', 'price' => 850000, 'available' => 100],
            ['name' => 'Festival Pass', 'price' => 1500000, 'available' => 60],
            ['name' => 'VIP Pass', 'price' => 2500000, 'available' => 40]
        ]
    ],
    [
        'id' => 4,
        'name' => 'Dewa 19 Reunion Concert',
        'date' => '2024-11-28',
        'time' => '19:00',
        'venue' => 'ICE BSD',
        'location' => 'Jakarta',
        'category' => 'concert',
        'startingPrice' => 750000,
        'availableTickets' => 300,
        'image' => 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'type' => 'event',
        'description' => 'Legendary Indonesian rock band Dewa 19 reunites for a special concert featuring their greatest hits.',
        'ticketTypes' => [
            ['name' => 'General Admission', 'price' => 750000, 'available' => 150],
            ['name' => 'VIP', 'price' => 1500000, 'available' => 80],
            ['name' => 'VVIP', 'price' => 2500000, 'available' => 70]
        ]
    ],
    [
        'id' => 5,
        'name' => 'Soundrenaline 2024',
        'date' => '2024-12-20',
        'time' => '16:00',
        'venue' => 'Garuda Wisnu Kencana',
        'location' => 'Bali',
        'category' => 'festival',
        'startingPrice' => 1150000,
        'availableTickets' => 500,
        'image' => 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'type' => 'event',
        'description' => 'Indonesia\'s premier music festival featuring the best local and international artists in a stunning Bali setting.',
        'ticketTypes' => [
            ['name' => 'General Admission', 'price' => 1150000, 'available' => 200],
            ['name' => 'VIP', 'price' => 2000000, 'available' => 150],
            ['name' => 'VVIP', 'price' => 3500000, 'available' => 150]
        ]
    ],
    [
        'id' => 6,
        'name' => 'We The Fest',
        'date' => '2024-12-08',
        'time' => '14:00',
        'venue' => 'GBK Sports Complex',
        'location' => 'Jakarta',
        'category' => 'festival',
        'startingPrice' => 950000,
        'availableTickets' => 0,
        'image' => 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'type' => 'event',
        'description' => 'A celebration of music, art, and culture in the heart of Jakarta. [SOLD OUT]',
        'ticketTypes' => [
            ['name' => 'General Admission', 'price' => 950000, 'available' => 0],
            ['name' => 'VIP', 'price' => 1800000, 'available' => 0],
            ['name' => 'VVIP', 'price' => 3000000, 'available' => 0]
        ]
    ]
];

// Handle query parameters for filtering
$category = $_GET['category'] ?? null;
$location = $_GET['location'] ?? null;
$search = $_GET['search'] ?? null;

$filteredEvents = $events;

// Apply filters
if ($category && $category !== 'all') {
    $filteredEvents = array_filter($filteredEvents, function($event) use ($category) {
        return $event['category'] === $category;
    });
}

if ($location && $location !== 'all') {
    $filteredEvents = array_filter($filteredEvents, function($event) use ($location) {
        return $event['location'] === $location;
    });
}

if ($search) {
    $filteredEvents = array_filter($filteredEvents, function($event) use ($search) {
        return stripos($event['name'], $search) !== false || 
               stripos($event['venue'], $search) !== false;
    });
}

// Re-index array after filtering
$filteredEvents = array_values($filteredEvents);

echo json_encode([
    'success' => true,
    'data' => $filteredEvents,
    'total' => count($filteredEvents)
]);
?> 
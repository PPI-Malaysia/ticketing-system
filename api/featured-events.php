<?php
// Featured events - typically would be marked as featured in the database
$featuredEvents = [
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
        'featured' => true
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
        'featured' => true
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
        'featured' => true
    ]
];

echo json_encode([
    'success' => true,
    'data' => $featuredEvents,
    'total' => count($featuredEvents)
]);
?> 
import React, { useState } from "react";
import Button from "../ui/Button";

interface EventSearchProps {
	onSearch: (query: string) => void;
	onFilterChange: (category: string) => void;
	categories: string[];
}

const EventSearch: React.FC<EventSearchProps> = ({
	onSearch,
	onFilterChange,
	categories,
}) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(searchQuery);
	};

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		onFilterChange(category);
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
			<form
				onSubmit={handleSearch}
				className="space-y-4"
			>
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="flex-1">
						<label
							htmlFor="search"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Search Events
						</label>
						<div className="relative">
							<input
								type="text"
								id="search"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search by event name, location, or organizer..."
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
							/>
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<svg
									className="h-5 w-5 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="sm:w-48">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Category
						</label>
						<select
							id="category"
							value={selectedCategory}
							onChange={(e) => handleCategoryChange(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="all">All Categories</option>
							{categories.map((category) => (
								<option
									key={category}
									value={category}
								>
									{category}
								</option>
							))}
						</select>
					</div>
					<div className="flex items-end">
						<Button
							type="submit"
							size="md"
						>
							Search
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EventSearch;

# SOLUTION

## Estimation

Estimated: 8 hours

Spent: 8 hours

## Test Cases

### 1. Edge Case - No Results ✅ IMPLEMENTED

**Given** I am on the product collection page
**When** I search for a tag that doesn't exist (e.g., "xyz123")
**Then** I should see a "No products found matching your filters." message

### 2. Edge Case - Clear Filters ✅ IMPLEMENTED

**Given** I have applied multiple filters
**When** I click the "Clear All" button
**Then** all filters should be reset to default values
**And** all paginated products should display again

### 3. Pagination Functionality ✅ IMPLEMENTED

**Given** I have 12 products and product limit per page is 4
**When** I navigate to page 2
**Then** I should see the next set(4) of products
**And** the pagination should update to show page 2 as active

## Solution

### Technical Implementation ✅ COMPLETED

I built a React application with the following architecture:

**Component Structure:**

- `App.js` - Root component with basic layout structure
- `products.js` - Main container component managing pagination and layout
- `filters.js` - Handles all filtering logic (tags, price, subscription)
- `product-table` - Responsive product display system
  - `index.js` - Main table component with loading/error states
  - `/component/desktop.js` - Desktop table view
  - `/component/mobile.js` - Mobile card view
- `pagination.js` - Handles pagination with ellipsis for large page counts

**Custom Hooks:**

- `use-products.js` - Centralized data fetching, filtering, and state management

**Utilities:**

- `formatPrice()` - Currency formatting utility using `Intl.NumberFormat`

**Key Features Implemented:**

1. ✅ **API Integration**: Uses fetch to get data from json-server running on port 3010
2. ✅ **Real-time Filtering with Debouncing**: 500ms debounce on filter inputs for better performance
3. ✅ **Fully Responsive Design**:
   - Desktop: Traditional table layout
   - Mobile: Card-based layout
   - Adaptive breakpoints using Tailwind CSS
4. ✅ **Server-side Pagination**: Shows 4 products per page with proper API pagination
5. ✅ **Comprehensive Error Handling**:
   - API connection errors
   - Loading states with spinner
   - Empty state messages
   - Graceful fallbacks
6. ✅ **Advanced State Management**:
   - Centralized state with custom hook
   - Automatic page reset on filter changes
   - Proper cleanup and memory management

**Filtering Logic Implemented:**

- ✅ **Tags**: Server-side filtering using `tags_like` parameter for partial matching
- ✅ **Price**: Server-side filtering using `price_lte` parameter (less than or equal)
- ✅ **Subscription**: Server-side boolean filtering using `subscription` parameter
- ✅ **Combined Filters**: Multiple filters work together seamlessly

**Styling & UX:**

- ✅ **Tailwind CSS**: Utility-first CSS framework for rapid development
- ✅ **Modern Design**: Clean, professional interface with good contrast
- ✅ **Interactive Elements**: Hover states, focus states, and smooth transitions
- ✅ **Loading States**: Proper loading spinners and skeleton states
- ✅ **Accessibility**: Proper labels, focus management, and semantic HTML

**Performance Features:**

- ✅ **Debounced Search**: 500ms debounce prevents excessive API calls
- ✅ **Optimized Re-renders**: Proper dependency arrays and state management
- ✅ **Server-side Operations**: Filtering and pagination handled by json-server

### API Integration

**Endpoint**: `http://localhost:3010/products`

**Supported Query Parameters:**

- `_page` - Page number for pagination
- `_limit` - Items per page
- `tags_like` - Partial tag matching
- `price_lte` - Maximum price filter
- `subscription` - Boolean subscription filter

**Response Headers:**

- `X-Total-Count` - Total number of matching products

## Improvements for Better Product

**1. UI/UX Improvements (Estimate: 6 hours)**

- ✅ Debouncing implemented (500ms)
- Add loading skeletons instead of simple spinners
- Breadcrumb navigation
- Toast notifications for actions

**2. Enhanced Filtering (Estimate: 8 hours)**

- Multi-select tag filtering with checkboxes
- Price range slider (min-max) instead of single max value
- Sort functionality (price, name, date)
- Advanced search with multiple criteria

**2. New Features (Estimate: 8 hours)**

- Add product detail modal on click
- Implement wishlist functionality
- Add "Add to Cart" buttons with quantity selectors

**4. Testing & Quality (Estimate: 8 hours)**

- Unit tests for all components with Jest/React Testing Library
- Integration tests for filtering scenarios
- E2E tests with Cypress or Playwright
- Performance testing with Lighthouse

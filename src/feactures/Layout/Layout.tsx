export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl">Header</h1>
        </header>
        <main className="flex-grow bg-gray-100 p-4">
            <h2 className="text-xl">Main Content</h2>
        </main>
        <footer className="bg-gray-800 text-white p-4">
            <p>Footer</p>
        </footer>
        </div>
    )
    }

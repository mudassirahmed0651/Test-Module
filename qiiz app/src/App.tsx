import Sidebar from './components/Sidebar'
import QuizSection from './components/QuizSection'

function App() {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <header className="h-16 border-b bg-white px-8 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-800">Exam Portal</h1>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                            AS
                        </div>
                    </div>
                </header>
                <div className="p-4">
                    <QuizSection />
                </div>
            </main>
        </div>
    )
}

export default App

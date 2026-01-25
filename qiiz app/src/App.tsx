import Sidebar from './components/Sidebar'
import QuizSection from './components/QuizSection'

function App() {
    return (
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/src/assets/bg-quiz.png')" }}
        >
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <header className="h-16 border-b  bg-white px-8 flex items-center justify-between shrink-0 w-full">
                    <h1 className="text-xl font-bold text-gray-800">Qur’anic Knowledge Assessment</h1>
                    <div className="flex items-center gap-4">
                        <div className="w-13 h-13 bg-brand-blue-100 rounded-full flex items-center justify-center text-brand-blue-600 font-bold">
                            MTH
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto">
                    <div className="p-4 min-h-full flex items-center justify-center">
                        <QuizSection />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App

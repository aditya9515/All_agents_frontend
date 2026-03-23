const API_BASE = "https://abc123.ngrok-free.app";

export async function runAgent(query: string) {
    const res = await fetch(`${API_BASE}/run-agent`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        throw new Error("Failed to fetch agent response");
    }

    return res.json();
}
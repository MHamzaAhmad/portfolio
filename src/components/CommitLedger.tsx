import { getGitHubContributions } from "@/actions/github";
import CommitLedgerClient from "./CommitLedgerClient";

export default async function CommitLedger() {
    const data = await getGitHubContributions(10);
    return <CommitLedgerClient data={data} />;
}

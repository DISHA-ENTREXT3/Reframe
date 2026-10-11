<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the launch site in TanStack Start: the homepage contains anchored editorial sections, with separate contact and privacy routes, so navigation follows the approved single-page launch scope.
- Use shared site header/footer and semantic global CSS tokens with editorial Button variants, so brand values can change without changing page logic.
- Store inquiries only through a schema-validated public server function with a dynamically loaded privileged client; deny all visitor reads and writes at the database layer to protect lead details.
- Keep work concepts explicitly illustrative and avoid team profiles until approved identities and authorised portfolio material are provided.

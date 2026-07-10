import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { articles } from "@/data/articles";

export function JournalEdit() {
  const [featuredArticle, ...supportingArticles] = articles.slice(0, 3);

  if (!featuredArticle) {
    return null;
  }

  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <SectionHeading
          title="From the journal"
          copy="Useful notes on authentic Indian wear, textile care, and styling pieces that stay in rotation."
          action={<Button href="/journal" variant="ghost">Read all guides</Button>}
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <ArticleCard article={featuredArticle} feature />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {supportingArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

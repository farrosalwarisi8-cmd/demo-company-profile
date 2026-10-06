import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jobs, getJobBySlug } from "@/data/jobs";
import { PageHeader } from "@/components/layout/page-header";
import { JobDetail } from "@/components/sections/career/job-detail";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = getJobBySlug(params.slug);
  if (!job) return {};
  return { title: job.title, description: job.description };
}

export default function JobDetailPage({ params }: Props) {
  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <>
      <PageHeader
        title="Lowongan Kerja"
        breadcrumb={[{ label: "Karir", href: "/karir" }, { label: job.title }]}
        motif="network"
      />
      <JobDetail job={job} />
    </>
  );
}
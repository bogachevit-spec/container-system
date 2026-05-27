import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const line = await prisma.line.create({
      data: {
        name: body.name,
        aliases: body.aliases || [],
        keywords: body.keywords || [],
        effectiveDate: body.effectiveDate
          ? new Date(body.effectiveDate)
          : null,

        demurrageInfo: body.demurrageInfo || {},
      },
    })

    return NextResponse.json(line)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Failed to create line',
      },
      {
        status: 500,
      }
    )
  }
}